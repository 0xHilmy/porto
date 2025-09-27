# Cara Mengganti Foto Profil

Untuk mengganti foto profil di hero section:

1. **Siapkan foto Anda** dengan spesifikasi berikut:
   - Format: **PNG dengan background transparan** (recommended)
   - Alternatif: JPG atau WebP
   - Resolusi minimal: 800x1000 pixels (portrait orientation)
   - Ukuran file: maksimal 2MB untuk performa optimal

2. **Ganti file foto**:
   - Hapus file `src/assets/profile.jpg` yang ada
   - Copy foto Anda ke folder `src/assets/`
   - Rename foto Anda menjadi `profile.png` (untuk PNG transparan)

3. **Cara membuat background transparan**:
   - Gunakan tools seperti:
     - **Remove.bg** (online, gratis)
     - **Photoshop** (Background Eraser Tool)
     - **GIMP** (gratis, Fuzzy Select Tool)
     - **Canva** (Background Remover)

4. **Alternatif menggunakan URL eksternal**:
   Jika Anda ingin menggunakan foto dari URL eksternal, edit file `src/components/Hero.tsx`:
   ```jsx
   <img 
     src="https://your-photo-url.com/photo.png" 
     alt="Hilmy Profile"
     // ... rest of props
   />
   ```

5. **Tips untuk foto terbaik**:
   - Gunakan foto dengan pencahayaan yang baik
   - **Background transparan** untuk efek yang lebih clean
   - Foto portrait (vertikal) akan terlihat lebih baik
   - Pastikan wajah terlihat jelas di bagian atas foto
   - Pose yang natural dan profesional

Foto akan otomatis ter-apply dengan efek grayscale dan akan berwarna saat di-hover, dengan background yang transparan sehingga menyatu dengan background section.