/* DDPE Media Store: shared photo album metadata in Supabase. */
(function (global) {
  "use strict";

  var cfg = global.DDPE_NEWS_CONFIG || {};

  function enabled() {
    return Boolean(cfg.supabaseUrl && cfg.supabaseAnonKey && cfg.mediaTable);
  }

  function apiBase() {
    return cfg.supabaseUrl.replace(/\/$/, "").replace(/\/rest\/v1$/, "");
  }

  function fromRow(row) {
    return {
      id: row.id,
      title: row.title,
      date: row.album_date,
      description: row.description,
      fileNames: Array.isArray(row.file_names) ? row.file_names : [],
      fileUrls: Array.isArray(row.file_urls) ? row.file_urls : [],
      status: row.status,
      savedAt: row.created_at
    };
  }

  async function listPublished() {
    if (!enabled()) return [];
    var url = apiBase() + "/rest/v1/" + encodeURIComponent(cfg.mediaTable) +
      "?status=eq.published&order=album_date.desc,created_at.desc";
    var response = await fetch(url, {
      headers: { apikey: cfg.supabaseAnonKey, Accept: "application/json" }
    });
    if (!response.ok) throw new Error("Media server gagal dibaca: " + response.status);
    return (await response.json()).map(fromRow);
  }

  async function sessionToken() {
    var client = global.DDPE_SUPABASE_CLIENT;
    if (!client || !client.auth) return "";
    var result = await client.auth.getSession();
    return result.data.session ? result.data.session.access_token : "";
  }

  async function createAlbum(album) {
    if (!enabled()) throw new Error("Konfigurasi tabel media belum tersedia.");
    var token = await sessionToken();
    if (!token) throw new Error("Sesi Supabase tidak tersedia. Silakan masuk kembali.");
    var response = await fetch(apiBase() + "/rest/v1/" + encodeURIComponent(cfg.mediaTable), {
      method: "POST",
      headers: {
        apikey: cfg.supabaseAnonKey,
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        Prefer: "return=representation"
      },
      body: JSON.stringify({
        title: album.title,
        album_date: album.date,
        description: album.description,
        file_names: album.fileNames,
        file_urls: album.fileUrls,
        status: album.status
      })
    });
    if (!response.ok) throw new Error("Media gagal disimpan ke server: " + response.status);
    var rows = await response.json();
    return rows[0] ? fromRow(rows[0]) : album;
  }

  global.DDPEMedia = {
    listPublished: listPublished,
    createAlbum: createAlbum
  };
})(window);
