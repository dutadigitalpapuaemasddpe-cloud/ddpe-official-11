# Website Resmi — Duta Digital Papua Emas

**Domain:** ddpe.my.id  
**Versi:** Agustus 2026  

Website profil organisasi (bukan portal pemetaan pengurus).

Catatan arsitektur: repositori ini menggunakan HTML/CSS/JavaScript vanilla dan tidak memiliki folder Next.js `app` atau `pages`. Fitur detail berita dan Media Center karena itu dipasang pada `artikel.html` dan `media.html` agar tetap berjalan pada deployment static Vercel.

---

## Struktur folder

```
ddpe-official/
├── index.html          → Beranda + intro animasi
├── tentang.html        → Profil, visi, nilai
├── struktur.html       → Kepemimpinan & sistem Duta
├── program.html        → Pilar Literasi & Inovasi
├── kegiatan.html       → Aksi / kegiatan
├── media.html          → Media center (PTFI-style)
├── berita.html         → Daftar berita formal
├── artikel.html        → Baca artikel (?id=...)
├── gabung.html         → Coming soon pendaftaran
├── kontak.html         → Kontak resmi
├── tulis-berita.html   → Ruang kerja pengurus (password)
├── css/main.css        → Semua gaya
├── robots.txt          → Aturan crawler dan tautan sitemap
├── sitemap.xml         → Daftar halaman publik ddpe.my.id
├── js/
│   ├── main.js         → Navbar, reveal, menu mobile
	│   ├── theme.js        → Tema Terang/Gelap/Sistem
│   ├── news-config.js  → Password & integrasi (EDIT DI SINI)
│   └── news-store.js   → Data berita + Kompasiana
└── assets/             → Logo, foto tim, twibbon
```

---

## Cara edit di VS Code

1. Buka folder `ddpe-official` di VS Code.
2. Live preview: extension **Live Server** → klik Go Live pada `index.html`.
3. Ganti teks/halaman langsung di file HTML yang sesuai.
4. Ganti warna di `css/main.css` → bagian `:root { ... }`.
5. Ganti password tulis berita di `js/news-config.js`.
6. Tambah artikel bawaan di `js/news-store.js` → array `SEED`.

### Engagement artikel

Jalankan tambahan SQL pada `supabase-media-schema.sql` untuk membuat tabel likes dan komentar secara additive. Halaman artikel tetap dapat dimuat jika tabel tersebut belum dibuat; jumlah suka akan fallback ke `0` dan komentar ke empty state.

---

## Update ke domain production

Website ini tetap dirilis melalui domain lama `ddpe.my.id` dan `www.ddpe.my.id`. Setiap pembaruan cukup dilakukan pada deployment yang sama; tidak perlu membuat domain baru.

1. Upload folder ini ke GitHub (repo baru, misalnya `ddpe-official`).
2. Vercel → Import Project → pilih repo.
3. Root directory = folder yang berisi `index.html`.
4. Deploy.
5. Domains → pasang `ddpe.my.id` dan `www.ddpe.my.id`.

`robots.txt` dan `sitemap.xml` sudah menggunakan domain production lama.

---

## Halaman pengurus

- URL: `/tulis-berita.html`
- Password admin: diatur di `js/news-config.js` dan tidak ditampilkan di halaman login.
- Artikel, draf modul, dan metadata media yang ditulis saat ini tersimpan di browser (`localStorage`). Data belum tersinkron antarperangkat.
- Password halaman pengurus saat ini masih diperiksa oleh JavaScript client-side. Untuk penggunaan serius, migrasikan login ke Supabase Auth sebelum menyimpan data sensitif.
- Untuk sinkron semua perangkat dan upload media: hubungkan Supabase Database, Storage, dan Auth; jangan menaruh service role key di file publik.

---

## Kompasiana

Profil resmi: https://www.kompasiana.com/ddpe  

Artikel dari Kompasiana sudah dimasukkan ke sistem berita website (dengan tautan sumber).

---

## Kontak organisasi

- Email: dutadigitalpapuaemasddpe@gmail.com
- Founder: Rohilman Putra Jagong
- Lokasi: Mimika, Papua Tengah
