/* DDPE article engagement: likes and comments with graceful offline fallback. */
(function (global) {
  "use strict";

  var config = global.DDPE_NEWS_CONFIG || {};
  var localLikePrefix = "ddpe_article_like_";
  var deviceKey = "ddpe_engagement_device";

  function apiBase() {
    return String(config.supabaseUrl || "").replace(/\/$/, "").replace(/\/rest\/v1$/, "");
  }

  function configured() {
    return Boolean(apiBase() && config.supabaseAnonKey);
  }

  function request(table, query, options) {
    var settings = options || {};
    if (!configured()) return Promise.resolve([]);
    return fetch(apiBase() + "/rest/v1/" + table + query, {
      method: settings.method || "GET",
      headers: Object.assign({
        apikey: config.supabaseAnonKey,
        Accept: "application/json",
        "Content-Type": "application/json"
      }, settings.headers || {}),
      body: settings.body ? JSON.stringify(settings.body) : undefined
    }).then(function (response) {
      if (!response.ok) throw new Error("Supabase request failed: " + response.status);
      return response.status === 204 ? null : response.json();
    });
  }

  function hasLiked(articleId) {
    try { return localStorage.getItem(localLikePrefix + articleId) === "1"; } catch (error) { return false; }
  }

  function setLiked(articleId, value) {
    try {
      if (value) localStorage.setItem(localLikePrefix + articleId, "1");
      else localStorage.removeItem(localLikePrefix + articleId);
    } catch (error) { /* Storage can be unavailable in privacy mode. */ }
  }

  function deviceId() {
    var value = "";
    try { value = localStorage.getItem(deviceKey) || ""; } catch (error) {}
    if (!value) {
      value = "device-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2);
      try { localStorage.setItem(deviceKey, value); } catch (error) {}
    }
    return value;
  }

  function getLikes(articleId) {
    return request("article_likes", "?article_id=eq." + encodeURIComponent(articleId) + "&select=id")
      .then(function (rows) { return Array.isArray(rows) ? rows.length : 0; });
  }

  function toggleLike(articleId, liked) {
    if (liked) {
      return request("article_likes", "?article_id=eq." + encodeURIComponent(articleId) + "&device_id=eq." + encodeURIComponent(deviceId()), {
        method: "DELETE",
        headers: { Prefer: "return=minimal" }
      }).then(function () { setLiked(articleId, false); });
    }
    return request("article_likes", "", {
      method: "POST",
      headers: { Prefer: "return=minimal" },
      body: { article_id: articleId, device_id: deviceId() }
    }).then(function () { setLiked(articleId, true); });
  }

  function getComments(articleId) {
    return request("article_comments", "?article_id=eq." + encodeURIComponent(articleId) + "&select=id,article_id,user_name,comment_text,created_at&order=created_at.desc")
      .then(function (rows) { return Array.isArray(rows) ? rows : []; });
  }

  function addComment(articleId, name, text) {
    return request("article_comments", "", {
      method: "POST",
      headers: { Prefer: "return=representation" },
      body: { article_id: articleId, user_name: name, comment_text: text, created_at: new Date().toISOString() }
    }).then(function (rows) { return Array.isArray(rows) ? rows[0] : rows; });
  }

  global.DDPEEngagement = {
    getLikes: getLikes,
    hasLiked: hasLiked,
    toggleLike: toggleLike,
    getComments: getComments,
    addComment: addComment
  };
})(window);
