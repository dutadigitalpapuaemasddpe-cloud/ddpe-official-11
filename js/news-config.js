/**
 * DDPE — Konfigurasi sistem berita
 * Edit file ini untuk ganti password, Formspree, atau Supabase.
 */
window.DDPE_NEWS_CONFIG = {
  // Password halaman tulis-berita.html (ganti sebelum publish publik)
  editorPassword: "ddpe_bisa2026",

  // Endpoint Formspree (opsional) — notifikasi email saat artikel baru
  formspreeEndpoint: "",

  // Supabase (opsional) — sinkron multi-perangkat
  supabaseUrl: "https://khjbkktetfzckxarkggl.supabase.co/rest/v1/",
  supabaseAnonKey: "sb_publishable_qQyPsHEUOjjckLMQ1Rp66w_tB7OnL0R",
  table: "articles",
  storageBucket: "ddpe-media"
};
