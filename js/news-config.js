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
  supabaseUrl: "https://khjbkktetfzckxarkggl.supabase.co",
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoamJra3RldGZ6Y2t4YXJrZ2dsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc1NzIzMjcsImV4cCI6MjEwMzE0ODMyN30.SzwuCyiFpdL_t5xXgyTIwgpoJlvphnFHZKh0vyAyBJI",
  table: "articles",
  storageBucket: "ddpe-media"
};
