# Serum78 — Website Resmi

Landing page brand skincare **Serum78** (serum78.com). Website statis, cepat, mobile-first, dan SEO-friendly. Tanpa dependensi build — cukup upload file ke hosting/domain.

## 📁 Struktur File

```
serum78.com/
├── index.html          # Halaman utama (semua section)
├── css/style.css       # Design system & styling
├── js/main.js          # Interaksi (menu, FAQ, scroll reveal, form WA)
├── assets/favicon.svg  # Ikon brand
├── robots.txt          # Untuk mesin pencari
├── sitemap.xml         # Peta situs (SEO)
├── site.webmanifest    # PWA / ikon mobile
└── README.md           # File ini
```

## 🎨 Bagian Website
Hero → Trust bar → Masalah & Solusi → 3 Varian Produk → Bahan Aktif → Cara Pakai & Timeline Hasil → Statistik → Testimoni → Kenapa Serum78 → Paket Bundling → Cerita Brand → FAQ → CTA → Kontak (form WhatsApp) → Footer. Plus tombol WhatsApp mengambang.

## ✅ WAJIB Diganti Sebelum Live

Semua di bawah ini masih memakai **data placeholder** — ganti dengan data asli:

| Item | Lokasi | Nilai sekarang (placeholder) |
|------|--------|------------------------------|
| **Nomor WhatsApp** | `js/main.js` (`WA_NUMBER`) **dan** semua link `wa.me/6281234567890` di `index.html` | `6281234567890` |
| **Nomor WhatsApp tampil** | `index.html` bagian Kontak & Footer | `+62 812-3456-7890` |
| **Email** | `index.html` | `halo@serum78.com` |
| **Instagram / TikTok** | `index.html` footer & kontak | `@serum78.id` |
| **Harga** | `index.html` bagian Produk & Paket | Rp 89.000 – Rp 299.000 |
| **Nomor BPOM asli** | Tampilkan di produk bila sudah ada | belum dicantumkan |
| **Foto produk asli** | Ganti botol SVG dengan foto (opsional) | ilustrasi SVG |
| **Gambar OG** | Buat `assets/og-image.png` (1200×630) untuk preview share | belum ada |

> 💡 Cara cepat ganti nomor WA: buka `index.html`, cari-ganti (Ctrl+H) semua `6281234567890` → nomormu (format internasional tanpa `+`, mis. `628123456789`). Lalu ganti juga `WA_NUMBER` di `js/main.js`.

## 🏷️ Bar "Website Dijual"
Di paling atas halaman ada bar hitam bertuliskan **"Website ini DIJUAL"** dengan kontak WhatsApp (`wa.me/62859191749378`) dan Telegram (`t.me/+6287821381136`). **Setelah website terjual / tidak dijual lagi, hapus bar ini:**
- Di `index.html`: hapus blok `<!-- ===== Website For Sale notice ===== -->` … `</div>` (tepat sebelum `<!-- ===== Announcement ===== -->`).
- (Opsional) Di `css/style.css`: hapus blok `.for-sale { … }` di bawah komentar `/* Website For Sale bar */`.

## ⚠️ Catatan Kepatuhan (Penting)
Konten sudah memakai bahasa kosmetik yang aman ("membantu menyamarkan", "tampak lebih cerah"). **Jangan** menambah klaim menyembuhkan penyakit. Pastikan klaim BPOM, Halal, dan cruelty-free benar-benar sesuai sertifikat produk aslimu sebelum dipublikasikan.

## 🚀 Cara Menjalankan / Deploy
- **Preview lokal:** buka `index.html` langsung di browser (double-click), atau jalankan server statis:
  ```
  npx serve .
  ```
- **Deploy:** upload seluruh folder ke hosting (Niagahoster, cPanel, Netlify, Vercel, GitHub Pages, dll). Tidak perlu proses build.

## 🔤 Font
Memakai Google Fonts (Playfair Display + Plus Jakarta Sans) via CDN. Butuh koneksi internet saat halaman dibuka. Bila ingin fully offline, unduh font dan host sendiri.
