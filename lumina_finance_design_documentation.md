---
name: Lumina Finance
colors:
  surface: '#f9f9fe'
  surface-dim: '#d9dade'
  surface-bright: '#f9f9fe'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f8'
  surface-container: '#eeeef4'
  surface-container-high: '#e8e8ee'
  surface-container-highest: '#e2e2e9'
  on-surface: '#1a1b21'
  on-surface-variant: '#46464f'
  outline: '#767680'
  outline-variant: '#c6c6d0'
  inverse-surface: '#2f3036'
  inverse-on-surface: '#f1f0f7'
  primary: '#5e5ce6'
  on-primary: '#ffffff'
  primary-container: '#e4e1ff'
  on-primary-container: '#170964'
  secondary: '#5c5d72'
  on-secondary: '#ffffff'
  secondary-container: '#e1e1f9'
  on-secondary-container: '#191a2c'
  tertiary: '#78536b'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffd8ee'
  on-tertiary-container: '#2e1126'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#410002'
typography:
  font-family: Hanken Grotesk, sans-serif
  display:
    large: 57px/64px font-bold
    medium: 45px/52px font-bold
    small: 36px/44px font-bold
  headline:
    large: 32px/40px font-semibold
    medium: 28px/36px font-semibold
    small: 24px/32px font-semibold
  title:
    large: 22px/28px font-medium
    medium: 16px/24px font-medium
    small: 14px/20px font-medium
  body:
    large: 16px/24px font-normal
    medium: 14px/20px font-normal
    small: 12px/16px font-normal
  label:
    large: 14px/20px font-medium
    medium: 12px/16px font-medium
    small: 11px/16px font-medium
spacing:
  margin-mobile: 24px
  margin-desktop: 80px
  stack-xl: 48px
  stack-lg: 32px
  stack-md: 24px
  stack-sm: 16px
  inline-md: 16px
  inline-sm: 8px
rounding:
  full: 9999px
  large: 24px
  medium: 16px
  small: 8px
---

# Lumina Finance Design System

## Filosofi Desain
Lumina Finance mengedepankan pengalaman finansial yang modern, bersih, dan intuitif. Menggunakan skema warna biru elektrik yang dipadukan dengan latar belakang permukaan yang sangat terang (off-white) untuk menciptakan kesan profesional sekaligus futuristik.

## Palet Warna
- **Primary (#5e5ce6)**: Digunakan untuk aksi utama, tombol penting, dan elemen brand yang menonjol.
- **Surface (#f9f9fe)**: Warna latar belakang utama untuk memberikan ruang bernapas yang luas dan kesan bersih.
- **On-Surface (#1a1b21)**: Warna teks utama untuk kontras yang optimal.
- **Secondary & Tertiary**: Digunakan sebagai aksen pada kategori transaksi dan visualisasi data.

## Tipografi
Sistem ini menggunakan **Hanken Grotesk**, font sans-serif modern yang sangat terbaca baik dalam ukuran besar maupun kecil.
- **Headline**: Memberikan penekanan kuat pada saldo dan judul bagian.
- **Body**: Digunakan untuk detail transaksi dan teks informasi.

## Komponen Utama
- **TopAppBar**: Transparan dengan avatar pengguna dan notifikasi.
- **BottomNavBar**: Menggunakan efek blur kaca (backdrop filter) dengan navigasi 5 tujuan.
- **Action Cards**: Sudut membulat penuh (Round Full) untuk tombol aksi cepat.
- **Transaction Lists**: Layout bersih dengan ikon kategori dalam lingkaran berwarna lembut.

## Elemen Visual
- **Sudut Membulat**: Penggunaan `ROUND_FULL` memberikan kesan ramah dan modern.
- **Bayangan (Shadows)**: Minimalis, lebih mengandalkan pemisahan warna kontainer daripada bayangan yang berat.
- **Grafik**: Menggunakan gradien biru ke ungu untuk statistik.
