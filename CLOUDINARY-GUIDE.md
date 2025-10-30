# Panduan Upload Foto ke Cloudinary

## Setup Sudah Selesai ✅

Project Anda sudah terintegrasi dengan Cloudinary. Berikut cara menggunakannya:

## 1. Upload Foto ke Cloudinary

### Cara Manual (via Dashboard)

1. Login ke [Cloudinary Dashboard](https://cloudinary.com/console)
   - Account: `djzb4f4p8`

2. Klik **Media Library** di sidebar kiri

3. **Buat Folder** (Recommended):
   - Klik "Create Folder"
   - Beri nama: `rifda-jepara` (sudah dibuat di contoh code)
   - Ini untuk organisasi foto

4. **Upload Foto**:
   - Klik "Upload" atau drag & drop foto
   - Upload bisa **50+ foto sekaligus**
   - Tunggu sampai selesai upload

5. **Copy Public ID**:
   - Setelah upload, klik foto
   - Lihat bagian "Public ID" (contoh: `rifda-jepara/kusen-1`)
   - Copy Public ID ini untuk dipakai di code

### Cara via Cloudinary API (Advanced)

Bisa pakai script untuk batch upload:

```bash
npm install cloudinary-cli -g
cld admin upload_folder ./photos rifda-jepara/
```

## 2. Update Daftar Foto di Code

Edit file: `src/components/Gallery.tsx`

```typescript
const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "rifda-jepara/kusen-1",
    title: "Kusen Aluminium Premium",
    description: "Kusen aluminium warna hitam minimalis"
  },
  {
    id: "rifda-jepara/pintu-1",
    title: "Pintu Sliding Aluminium",
    description: "Pintu sliding 2 daun dengan kaca"
  },
  // Tambahkan 50+ foto di sini
  // Format: "nama-folder/nama-file" (tanpa ekstensi)
];
```

**PENTING**:
- Public ID **TANPA** ekstensi file (`.jpg`, `.png`)
- Gunakan format: `folder/nama-file`
- Contoh: `rifda-jepara/kusen-1` ✅ (bukan `rifda-jepara/kusen-1.jpg` ❌)

## 3. Cara Kerja CDN Cloudinary

### Otomatis Optimasi:
- ✅ **Auto format** - Konversi ke WebP untuk browser modern
- ✅ **Auto quality** - Kompres tanpa hilang kualitas visual
- ✅ **Lazy loading** - Load foto saat terlihat di layar
- ✅ **Responsive** - Ukuran disesuaikan device (mobile/desktop)
- ✅ **Fast CDN** - Server terdekat user otomatis

### Perbandingan Ukuran:
```
Foto Original (lokal):    2MB per foto × 50 = 100MB
Foto Cloudinary (CDN):    50KB per foto × 50 = 2.5MB (!!!)
```

**Hemat 95%+ bandwidth!**

## 4. Fitur Gallery yang Sudah Dibuat

### ✅ Load More Button
- Awalnya load 12 foto
- Klik "Load More" untuk load 12 foto berikutnya
- Sampai semua foto ter-load

### ✅ Lightbox/Modal
- Klik foto untuk lihat full size
- Otomatis load versi HD
- Bisa close dengan tombol X atau klik luar

### ✅ Hover Effect
- Hover foto untuk lihat title
- Smooth animation

### ✅ Responsive Grid
- Mobile: 2 kolom
- Tablet: 3 kolom
- Desktop: 4 kolom

## 5. Cara Pakai di Komponen Lain

Jika ingin pakai Cloudinary di komponen lain:

```typescript
import { getCloudinaryUrl, cloudinaryPresets } from "@/lib/cloudinary";

// Cara 1: Manual
<img src={getCloudinaryUrl("rifda-jepara/hero-image", {
  width: 1920,
  quality: 'auto',
  format: 'auto',
})} />

// Cara 2: Pakai Preset
<img src={cloudinaryPresets.thumbnail("rifda-jepara/hero-image")} />
<img src={cloudinaryPresets.gallery("rifda-jepara/hero-image")} />
<img src={cloudinaryPresets.hero("rifda-jepara/hero-image")} />
```

### Preset yang Tersedia:
- `thumbnail` - 300x300px (untuk card kecil)
- `gallery` - 800px width (untuk gallery grid)
- `fullsize` - 1920px width (untuk lightbox/modal)
- `hero` - 1920x1080px (untuk hero section)

## 6. Tips Optimasi

### Naming Convention (Recommended):
```
rifda-jepara/
├── kusen/
│   ├── kusen-aluminium-1
│   ├── kusen-aluminium-2
│   └── kusen-kayu-1
├── pintu/
│   ├── pintu-sliding-1
│   └── pintu-lipat-1
├── jendela/
│   └── jendela-casement-1
├── kitchen-set/
│   └── kitchen-modern-1
└── partisi/
    └── partisi-kaca-1
```

### Best Practices:
1. **Nama file** pakai huruf kecil + dash (`-`)
2. **Folder** terpisah per kategori produk
3. **Resolusi upload** minimal 1920px (width) untuk HD
4. **Format upload** JPG atau PNG (otomatis convert ke WebP)
5. **Max file size** upload 10MB per foto

## 7. Testing

Jalankan dev server:
```bash
npm run dev
```

Buka browser dan:
1. Scroll ke section **Galeri Proyek Kami**
2. Cek foto ter-load dengan baik
3. Test klik foto (lightbox harus muncul)
4. Test button "Load More"

## 8. Monitoring & Limits

### Free Plan Cloudinary:
- ✅ 25 GB Storage
- ✅ 25 GB Bandwidth/bulan
- ✅ Unlimited transformations

### Check Usage:
Login [Cloudinary Console](https://cloudinary.com/console) → Dashboard → Usage

### Jika Mau Upgrade:
Cloudinary ada paid plan jika mau lebih banyak bandwidth/storage.

## 9. Troubleshooting

### Foto tidak muncul?
1. Pastikan Public ID benar (tanpa ekstensi)
2. Cek folder name di Cloudinary dashboard
3. Pastikan foto sudah selesai upload (tunggu processing)

### Foto blur/kualitas jelek?
1. Upload foto dengan resolusi lebih tinggi
2. Adjust `quality` parameter di code (default: 'auto')

### Load lambat?
1. Cek koneksi internet
2. Pastikan lazy loading aktif (sudah default)
3. Reduce jumlah foto di initial load (default: 12)

## Support

Jika ada masalah, bisa cek:
- [Cloudinary Docs](https://cloudinary.com/documentation)
- [Image Transformations](https://cloudinary.com/documentation/image_transformations)
