/**
 * DDPE News Store
 * Seed bawaan + Kompasiana + localStorage (tulis/hapus pengurus)
 */
(function (global) {
  "use strict";

  var STORAGE_KEY = "ddpe_articles_v1";
  var cfg = global.DDPE_NEWS_CONFIG || {};

  var SEED = [
    {
      id: "kompasiana-sinara-2026",
      slug: "dari-timika-untuk-indonesia-sinara-rumah-film-independen",
      title: "Dari Timika untuk Indonesia: Saya Mengembangkan SINARA, Rumah Film Independen",
      excerpt: "Rohilman Putra Jagong mengembangkan SINARA — platform streaming film independen untuk pelajar, mahasiswa, dan filmmaker muda dari seluruh Indonesia.",
      body: "<p>Rohilman Putra Jagong, siswa kelas XII Jurusan Desain Komunikasi Visual di SMKS Pusat Keunggulan YAPIS TIK Timika, Kabupaten Mimika, Papua Tengah, sedang mengembangkan platform bernama <strong>SINARA</strong>. Platform ini dirancang sebagai ruang publikasi dan layanan streaming bagi film-film independen yang dibuat oleh pelajar, mahasiswa, komunitas film, dan filmmaker muda dari berbagai daerah di Indonesia.</p><p>Gagasan SINARA muncul dari keresahan terhadap keterbatasan yang dihadapi anak muda dalam membuat film: biaya, peralatan, waktu, dan sumber daya. Setelah film selesai, banyak karya hanya tersimpan di perangkat pribadi tanpa tempat penayangan yang tepat. SINARA hadir sebagai solusi — rumah bagi karya-karya tersebut.</p><p>SINARA memungkinkan kreator mengajukan dan menerbitkan film agar dapat diakses penonton yang lebih luas. Jenis karya mencakup film pendek, dokumenter, film pelajar, film edukasi, after movie, karya komunitas, dan film independen lainnya.</p><p>Dengan identitas <em>Rumah Film Independen Indonesia</em> dan slogan <em>Tempat Karya Menemukan Penontonnya</em>, SINARA bertujuan agar setiap film memiliki kesempatan untuk ditonton dan diapresiasi. Logo memakai bentuk pita film menyerupai huruf S; ungu untuk kreativitas, emas untuk kualitas dan harapan.</p><p>SINARA berasal dari Timika, Papua, dengan visi nasional mendukung filmmaker independen di seluruh Indonesia.</p>",
      category: "digital-papua",
      categoryLabel: "Digital Papua",
      author: "Duta Digital Papua Emas",
      publishedAt: "2026-07-17T17:33:00+09:00",
      status: "published",
      coverImage: "assets/tim-ddpe-1.jpg",
      sourceUrl: "https://www.kompasiana.com/ddpe/6a5a050034777c1a785fedc2/dari-timika-untuk-indonesia-saya-mengembangkan-sinara-rumah-film-independen",
      sourceName: "Kompasiana"
    },
    {
      id: "kompasiana-ekosistem-2026",
      slug: "ddpe-sebagai-ekosistem-transformasi-literasi-digital",
      title: "Duta Digital Papua Emas Sebagai Ekosistem Transformasi Literasi Digital Berbasis Organisasi Lintas Sekolah",
      excerpt: "Analisis kritis sosio-digital: DDPE sebagai gerakan kolektif yang mengonstruksi ulang literasi digital melalui pendekatan komunitas dan kepemudaan di Papua.",
      body: "<p>Duta Digital Papua Emas (DDPE) hadir sebagai gerakan kolektif yang mengonstruksi ulang literasi digital melalui pendekatan komunitas dan kepemudaan di Papua. Gerakan ini tidak hanya berfungsi sebagai inisiatif edukatif, tetapi juga sebagai ruang produksi agensi digital lokal yang menghubungkan literasi, inovasi, dan kepemimpinan pemuda.</p><p>Secara konseptual, DDPE merefleksikan transformasi digital yang bersifat kontekstual, partisipatoris, dan berbasis budaya lokal — menempatkan pemuda sebagai aktor utama perubahan sosial.</p><p>Hasil analisis mengungkap DDPE sebagai ekosistem sosial-digital dengan tiga elemen utama: <strong>literasi digital</strong>, <strong>inovasi digital</strong>, dan <strong>kepemimpinan pemuda</strong>.</p><p>DDPE dibangun atas dua pilar: <em>Duta Literasi Digital</em> (etika digital, keamanan informasi, pencegahan disinformasi) dan <em>Duta Inovasi Digital</em> (kreativitas, teknologi, produksi konten berbasis lokal).</p><p>Gerakan ini merespons kesenjangan digital struktural di wilayah periferal. Kesimpulan: DDPE merupakan bentuk baru ekosistem literasi digital berbasis komunitas melalui transformasi digital kontekstual dan partisipatoris.</p>",
      category: "berita",
      categoryLabel: "Analisis",
      author: "Duta Digital Papua Emas",
      publishedAt: "2026-06-30T16:49:00+09:00",
      status: "published",
      coverImage: "assets/tim-ddpe-2.jpg",
      sourceUrl: "https://www.kompasiana.com/ddpe/6a43902ded641515dc48bc22/duta-digital-papua-emas-sebagai-ekosistem-transformasi-literasi-digital-berbasis-organisasi-lintas-sekolah-analisis-kritis-sosio-digital-pemuda-papua",
      sourceName: "Kompasiana"
    },
    {
      id: "gb-2026-01",
      slug: "guide-book-ddpe-1-0-dirilis",
      title: "Guide Book DDPE 1.0 dirilis sebagai pedoman organisasi",
      excerpt: "Dokumen internal mencakup profil, sistem kepemimpinan, dua Pilar, sistem Duta, program, dan kaderisasi untuk fase fondasi 2026.",
      body: "<p>Duta Digital Papua Emas (DDPE) merilis <strong>Guide Book versi 1.0</strong> pada Agustus 2026. Buku ini menjadi pedoman hidup (living guide) bagi pengurus pusat, pengurus Pilar, Duta, alumni, calon anggota, dan mitra.</p><p>Isi utama mencakup profil organisasi, sistem kepemimpinan, dua Pilar (Literasi Digital dan Inovasi Digital), sistem Duta, program, kaderisasi, kode etik, serta roadmap 2026–2029.</p><p>Founder &amp; Ketua Umum Rohilman Putra Jagong menekankan bahwa fase awal berfokus pada sistem sehat, program konsisten, dan dampak nyata — bukan jumlah titel atau anggota.</p>",
      category: "berita",
      categoryLabel: "Organisasi",
      author: "Tim Media DDPE",
      publishedAt: "2026-08-14T10:00:00+09:00",
      status: "published",
      coverImage: "assets/tim-ddpe-3.jpg",
      sourceUrl: "",
      sourceName: ""
    },
    {
      id: "web-resmi",
      slug: "website-resmi-ddpe-aktif",
      title: "Website resmi DDPE aktif di ddpe.my.id",
      excerpt: "Wajah publik organisasi untuk mitra, media, calon anggota, dan masyarakat.",
      body: "<p>Portal resmi <strong>www.ddpe.my.id</strong> diluncurkan sebagai pusat informasi publik DDPE. Di dalamnya tersedia profil organisasi, struktur, program, kegiatan, media, serta kanal Gabung Bersama Kami.</p><p>Halaman Media dan Berita menjadi ruang publikasi kabar organisasi dan isu digital di Papua, termasuk artikel yang juga dipublikasikan di kanal Kompasiana resmi DDPE.</p>",
      category: "berita",
      categoryLabel: "Kelembagaan",
      author: "Tim Media DDPE",
      publishedAt: "2026-08-15T08:00:00+09:00",
      status: "published",
      coverImage: "assets/tim-ddpe-banner.jpg",
      sourceUrl: "",
      sourceName: ""
    },
    {
      id: "fondasi-2026",
      slug: "fase-fondasi-penataan-pengurus-dan-pilar",
      title: "Fase fondasi: penataan pengurus dan dua Pilar",
      excerpt: "Tahun 2026 menjadi tahun pembangunan fondasi DDPE di Mimika, Papua Tengah.",
      body: "<p>DDPE menetapkan 2026 sebagai <strong>tahun fondasi</strong>: penataan kepengurusan, pembangunan dua Pilar, perumusan sistem Duta, kaderisasi, administrasi, dan arah pengembangan organisasi.</p><p>Prinsip yang dipegang: program sebelum seremoni, kualitas sebelum kuantitas, kinerja sebelum jabatan, dan sistem sebelum ekspansi.</p><p>Fokus wilayah tahap awal adalah Mimika, Papua Tengah, dengan perluasan bertahap sesuai kesiapan sistem dan kualitas pembinaan.</p>",
      category: "berita",
      categoryLabel: "Internal",
      author: "Tim Media DDPE",
      publishedAt: "2026-08-12T09:00:00+09:00",
      status: "published",
      coverImage: "assets/tim-ddpe-1.jpg",
      sourceUrl: "",
      sourceName: ""
    }
  ];

  var FALLBACK_COVERS = [
    "assets/tim-ddpe-banner.jpg",
    "assets/tim-ddpe-1.jpg",
    "assets/tim-ddpe-2.jpg",
    "assets/tim-ddpe-3.jpg"
  ];

  function loadLocal() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      var parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  }

  function saveLocal(list) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  function remoteEnabled() {
    return Boolean(cfg.supabaseUrl && cfg.supabaseAnonKey);
  }

  function apiBase() {
    return cfg.supabaseUrl.replace(/\/$/, "").replace(/\/rest\/v1$/, "");
  }

  async function remoteToken() {
    var client = global.DDPE_SUPABASE_CLIENT;
    if (!client || !client.auth) return "";
    var result = await client.auth.getSession();
    return result.data.session ? result.data.session.access_token : "";
  }

  async function remoteRequest(method, id, body) {
    if (!remoteEnabled()) return null;
    var token = await remoteToken();
    if (!token) throw new Error("Sesi Supabase tidak tersedia. Silakan masuk kembali.");
    var url = apiBase() + "/rest/v1/" + encodeURIComponent(cfg.table || "articles");
    if (id) url += "?id=eq." + encodeURIComponent(id);
    var response = await fetch(url, {
      method: method,
      headers: {
        apikey: cfg.supabaseAnonKey,
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        Prefer: method === "POST" ? "return=representation" : "return=minimal"
      },
      body: body ? JSON.stringify(body) : undefined
    });
    if (!response.ok) throw new Error("Supabase request failed: " + response.status);
    if (method === "POST") return (await response.json())[0] || null;
    return true;
  }

  function toRemoteRow(article) {
    return {
      id: article.id,
      slug: article.slug,
      title: article.title,
      excerpt: article.excerpt,
      body: article.body,
      category: article.category,
      category_label: article.categoryLabel,
      author: article.author,
      published_at: article.publishedAt,
      status: article.status,
      cover_image: article.coverImage,
      source_url: article.sourceUrl,
      source_name: article.sourceName
    };
  }

  function fromRemoteRow(row) {
    return Object.assign({}, row, {
      categoryLabel: row.category_label,
      publishedAt: row.published_at,
      coverImage: row.cover_image,
      sourceUrl: row.source_url,
      sourceName: row.source_name
    });
  }

  async function remotePublished() {
    if (!remoteEnabled()) return [];
    var response = await fetch(apiBase() + "/rest/v1/" + encodeURIComponent(cfg.table || "articles") + "?status=eq.published&order=published_at.desc", {
      headers: { apikey: cfg.supabaseAnonKey, Accept: "application/json" }
    });
    if (!response.ok) throw new Error("Supabase read failed: " + response.status);
    return (await response.json()).map(fromRemoteRow);
  }

  async function publishedAsync() {
    var base = mergeArticles();
    try {
      var remote = await remotePublished();
      var map = {};
      base.forEach(function (article) { map[article.id] = article; });
      remote.forEach(function (article) { map[article.id] = article; });
      base = Object.keys(map).map(function (id) { return map[id]; });
    } catch (e) {
      console.warn("DDPE: berita remote tidak dapat dimuat.", e);
      // Seed remains available when the remote service is unavailable.
    }
    return publishedOnly(base);
  }

  async function byIdAsync(id) {
    var localArticle = byId(id);
    try {
      var list = await publishedAsync();
      return list.find(function (article) { return article.id === id || article.slug === id; }) || localArticle;
    } catch (e) {
      return localArticle;
    }
  }

  function mergeArticles() {
    var local = loadLocal();
    var map = {};
    SEED.forEach(function (a) { map[a.id] = Object.assign({}, a); });
    local.forEach(function (a) {
      if (a && a.id) map[a.id] = a;
    });
    // Hapus yang ditandai deleted
    Object.keys(map).forEach(function (k) {
      if (map[k].status === "deleted") delete map[k];
    });
    return Object.keys(map).map(function (k) { return map[k]; });
  }

  function publishedOnly(list) {
    return list
      .filter(function (a) { return a.status === "published"; })
      .sort(function (a, b) {
        return new Date(b.publishedAt) - new Date(a.publishedAt);
      });
  }

  function byId(id) {
    if (!id) return null;
    return mergeArticles().find(function (a) {
      return a.id === id || a.slug === id;
    }) || null;
  }

  function byCategory(cat) {
    var list = publishedOnly(mergeArticles());
    if (!cat || cat === "semua") return list;
    return list.filter(function (a) { return a.category === cat; });
  }

  function coverOf(a, index) {
    if (a) {
      var imageFields = [
        a.coverImage,
        a.cover_image,
        a.image,
        a.thumbnail,
        a.image_url,
        a.cover,
        a.gambar,
        a.imageUrl,
        a.coverUrl
      ];
      for (var imageIndex = 0; imageIndex < imageFields.length; imageIndex += 1) {
        if (typeof imageFields[imageIndex] === "string" && imageFields[imageIndex].trim()) return imageFields[imageIndex].trim();
      }
    }
    return FALLBACK_COVERS[(index || 0) % FALLBACK_COVERS.length];
  }

  function slugify(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .slice(0, 80) || ("artikel-" + Date.now());
  }

  function uid() {
    return "art-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 7);
  }

  function formatDate(iso) {
    try {
      return new Date(iso).toLocaleDateString("id-ID", {
        day: "numeric", month: "long", year: "numeric"
      });
    } catch (e) {
      return iso;
    }
  }

  function labelFor(cat) {
    var map = {
      berita: "Berita",
      "siaran-pers": "Siaran Pers",
      publikasi: "Publikasi",
      "digital-papua": "Digital Papua"
    };
    return map[cat] || "Berita";
  }

  async function publishArticle(input) {
    var article = {
      id: uid(),
      slug: slugify(input.title),
      title: (input.title || "").trim(),
      excerpt: (input.excerpt || "").trim(),
      body: (input.body || "").trim(),
      category: input.category || "berita",
      categoryLabel: input.categoryLabel || labelFor(input.category),
      author: (input.author || "Pengurus DDPE").trim(),
      publishedAt: new Date().toISOString(),
      status: "published",
      coverImage: input.coverImage || "",
      sourceUrl: "",
      sourceName: ""
    };

    if (!article.title || !article.body) {
      throw new Error("Judul dan isi berita wajib diisi.");
    }

    if (remoteEnabled()) {
      var remoteArticle = await remoteRequest("POST", "", toRemoteRow(article));
      if (remoteArticle) article = fromRemoteRow(remoteArticle);
    }
    var local = loadLocal().filter(function (item) { return item.id !== article.id; });
    local.unshift(article);
    saveLocal(local);

    if (cfg.formspreeEndpoint) {
      try {
        await fetch(cfg.formspreeEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            _subject: "[DDPE Berita] " + article.title,
            title: article.title,
            author: article.author,
            category: article.categoryLabel,
            excerpt: article.excerpt
          })
        });
      } catch (e) { /* ignore */ }
    }

    return article;
  }

  /**
   * Hapus artikel.
   * - Artikel lokal (id diawali art-): dihapus dari localStorage
   * - Artikel seed: disimpan sebagai status deleted di localStorage agar tidak muncul lagi
   */
  async function deleteArticle(id) {
    if (!id) return false;
    var local = loadLocal();
    var found = false;

    // Hapus dari local jika ada
    var next = local.filter(function (a) {
      if (a.id === id) { found = true; return false; }
      return true;
    });

    // Jika seed, tandai deleted
    var isSeed = SEED.some(function (s) { return s.id === id; });
    if (isSeed) {
      next.push({ id: id, status: "deleted" });
      found = true;
    }

    if (remoteEnabled()) await remoteRequest("DELETE", id);
    saveLocal(next);
    return found;
  }

  function listManaged() {
    // Semua yang published (untuk panel pengurus)
    return publishedOnly(mergeArticles());
  }

  async function listManagedAsync() {
    return publishedAsync();
  }

  async function updateArticle(id, input) {
    var existing = byId(id);
    if (!existing) throw new Error("Artikel tidak ditemukan.");

    var article = Object.assign({}, existing, {
      title: (input.title || "").trim(),
      excerpt: (input.excerpt || "").trim(),
      body: (input.body || "").trim(),
      category: input.category || existing.category,
      categoryLabel: input.categoryLabel || labelFor(input.category),
      author: (input.author || "Pengurus DDPE").trim(),
      coverImage: input.coverImage || existing.coverImage || "",
      status: "published"
    });

    if (!article.title || !article.body) {
      throw new Error("Judul dan isi berita wajib diisi.");
    }

    if (remoteEnabled()) {
      var remoteArticle = await remoteRequest("PATCH", id, toRemoteRow(article));
      if (remoteArticle) article = fromRemoteRow(remoteArticle);
    }
    var local = loadLocal().filter(function (item) { return item.id !== id; });
    local.unshift(article);
    saveLocal(local);
    return article;
  }

  function checkPassword(pw) {
    return String(pw || "") === String(cfg.editorPassword || "ddpe_bisa2026");
  }

  global.DDPENews = {
    allPublished: function () { return publishedOnly(mergeArticles()); },
    allPublishedAsync: publishedAsync,
    byIdAsync: byIdAsync,
    byCategory: byCategory,
    byId: byId,
    publish: publishArticle,
    update: updateArticle,
    deleteArticle: deleteArticle,
    listManaged: listManaged,
    listManagedAsync: listManagedAsync,
    coverOf: coverOf,
    checkPassword: checkPassword,
    formatDate: formatDate,
    labelFor: labelFor,
    seed: SEED
  };
})(window);
