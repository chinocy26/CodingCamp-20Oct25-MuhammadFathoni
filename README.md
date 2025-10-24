# Labon - Personal Portfolio Website

Portfolio website pribadi Muhammad Fathoni dengan fitur welcome message, form kontak tervalidasi, dan halaman profil lengkap. Dibangun menggunakan HTML, CSS, dan JavaScript.

## 🌟 Fitur Utama

### Halaman Home (index.html)
- **Welcome Message**: Input nama pengguna dengan greeting dinamis menggunakan localStorage
- **Hero Section**: Foto profil dengan animasi floating card
- **Portfolio Section**: 6 kartu kemampuan (Web Development, Logical Thinking, Data Analysis, UI/UX Design, Treasury, Data Science)
- **Contact Form**: Form kontak dengan validasi lengkap dan tampilan data yang disubmit
- **Social Links**: LinkedIn, Twitter, GitHub, Instagram

### Halaman Profile (profile.html)
- **About Profile**: Informasi lengkap (Nama, Pekerjaan, Email, Pendidikan)
- **Bio**: Deskripsi singkat sebagai Web Developer dan Bendahara MTS Al Muhsin
- **Skills Statistics**: Persentase kemampuan (JavaScript 50%, HTML 45%, CSS 50%, PHP 50%, MySQL 65%, Laravel 80%)
- **Responsive Design**: Tampilan optimal di semua perangkat

## 📝 Validasi Form Kontak

**Field yang Divalidasi:**
- **Name**: Required, 2-50 karakter, hanya huruf dan spasi
- **Email**: Required, format email valid (regex)
- **Phone**: Required, minimal 10 digit, mendukung format internasional
- **Message**: Required, 10-500 karakter

**Fitur Validasi:**
- Real-time validation saat user mengetik
- Visual feedback (border merah/hijau)
- Error message spesifik per field
- Success message setelah submit
- Loading animation pada button
- Display data yang disubmit di bawah form
- Input sanitization untuk keamanan

## 📁 Struktur Project

```
CodingCamp-20Oct25-MuhammadFathoni/
├── index.html          # Halaman home dengan portfolio dan contact form
├── profile.html        # Halaman profil pribadi
├── css/
│   └── style.css      # File CSS untuk seluruh project
├── js/
│   └── script.js      # File JavaScript untuk semua fungsi
├── assets/            # Folder gambar dan icon
└── README.md          # Dokumentasi project
```

