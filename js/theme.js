/* DDPE theme switcher */
(function () {
  "use strict";

  var STORAGE_KEY = "ddpe-theme";
  var root = document.documentElement;
  var media = window.matchMedia("(prefers-color-scheme: dark)");

  function getPreference() {
    var preference = localStorage.getItem(STORAGE_KEY);
    return ["light", "dark", "system"].indexOf(preference) !== -1 ? preference : "system";
  }

  function isDark(preference) {
    return preference === "dark" || (preference === "system" && media.matches);
  }

  function applyTheme(preference) {
    root.classList.toggle("dark", isDark(preference));
    root.dataset.theme = preference;
  }

  function setPreference(preference) {
    localStorage.setItem(STORAGE_KEY, preference);
    applyTheme(preference);
    updateControl(preference);
  }

  function updateControl(preference) {
    var select = document.querySelector("#theme-toggle-container select");
    if (select && select.value !== preference) select.value = preference;
  }

  function createControl() {
    var container = document.getElementById("theme-toggle-container");
    if (!container || container.dataset.ready === "true") return;

    var label = document.createElement("label");
    label.className = "theme-switcher";
    label.setAttribute("aria-label", "Pilih tema warna");
    var select = document.createElement("select");
    select.innerHTML =
      '<option value="light">Terang</option>' +
      '<option value="dark">Gelap</option>' +
      '<option value="system">Sistem</option>';
    select.value = getPreference();
    select.addEventListener("change", function () { setPreference(select.value); });
    label.appendChild(select);
    container.appendChild(label);
    container.dataset.ready = "true";
  }

  applyTheme(getPreference());
  media.addEventListener("change", function () {
    if (getPreference() === "system") applyTheme("system");
  });
  document.addEventListener("DOMContentLoaded", createControl);
})();
