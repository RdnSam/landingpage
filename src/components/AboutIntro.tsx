// src/components/AboutIntro.tsx atau src/app/components/AboutIntro.tsx
import React, { useState } from "react";
import { YouTubeEmbed } from "../components/vid/YouTubeEmbed";

export const AboutIntro: React.FC = () => {
  // Daftar URL YouTube yang ingin ditampilkan
  const videoUrls = [
    "https://youtu.be/-VeAQy0uxfU",
    "https://youtu.be/3Wm9G8lrR6s",
    "https://youtu.be/FAtRaIkDxns",
    // Tambahkan URL lain sesuai kebutuhan...
  ];

  // State untuk indeks video saat ini
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handler navigasi prev/next dengan wrap-around
  const handlePrev = () => {
    const prev = (currentIndex - 1 + videoUrls.length) % videoUrls.length;
    setCurrentIndex(prev);
  };
  const handleNext = () => {
    const next = (currentIndex + 1) % videoUrls.length;
    setCurrentIndex(next);
  };

  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6">
          {/* Hanya satu kolom, tanpa gambar */}
          <div className="flex flex-col justify-between">
            {/* Bagian atas: judul, paragraf pertama, video dengan navigasi */}
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Galeri{" "}
                </span>
                Prasojo Motor
              </h2>

              {/* Paragraf pertama */}
              <p className="text-xl text-muted-foreground mt-4">
                Prasojo Motor adalah bengkel motor profesional yang melayani semua jenis sepeda motor.
                Dari service rutin, tune-up, hingga overhaul mesin dengan garansi service yang terpercaya.
                Mekanik kami berpengalaman menangani motor matic, bebek, sport, dan motor tua dengan hasil memuaskan.
                Kami berkomitmen memberikan pelayanan terbaik dengan harga transparan dan amanah.
              </p>

              {/* Video embed + tombol navigasi */}
              <div className="mt-6 flex items-center justify-center">
                {/* Tombol Previous */}
                <button
                  onClick={handlePrev}
                  aria-label="Previous video"
                  className="
                    p-2 rounded-full bg-muted/20 hover:bg-muted/40 
                    focus:outline-none focus:ring-2 focus:ring-primary
                    disabled:opacity-50 disabled:cursor-not-allowed
                  "
                  // Jika tidak ingin wrap-around, uncomment baris berikut:
                  // disabled={currentIndex === 0}
                >
                  &#8249; {/* karakter ‹ */}
                </button>

                {/* Wrapper video dengan aspect ratio 16:9 */}
                <div className="mx-4 w-full max-w-2xl">
                  {/* Jika Tailwind plugin aspect-ratio terpasang, bisa ganti wrapper:
                      <div className="aspect-w-16 aspect-h-9 w-full">
                        <YouTubeEmbed url={videoUrls[currentIndex]} className="w-full h-full" />
                      </div>
                  */}
                  {/* Tanpa plugin: */}
                  <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                    <YouTubeEmbed
                      url={videoUrls[currentIndex]}
                      className="absolute top-0 left-0 w-full h-full"
                    />
                  </div>
                </div>

                {/* Tombol Next */}
                <button
                  onClick={handleNext}
                  aria-label="Next video"
                  className="
                    p-2 rounded-full bg-muted/20 hover:bg-muted/40 
                    focus:outline-none focus:ring-2 focus:ring-primary
                    disabled:opacity-50 disabled:cursor-not-allowed
                  "
                  // Jika tidak ingin wrap-around, uncomment:
                  // disabled={currentIndex === videoUrls.length - 1}
                >
                  &#8250; {/* karakter › */}
                </button>
              </div>

              {/* (Opsional) Indikator posisi video, misalnya "1 / 3" */}
              <div className="text-center text-sm text-muted-foreground mt-2">
                {currentIndex + 1} / {videoUrls.length}
              </div>
            </div>

            {/* Paragraf kedua, tetap di bawah video */}
            <p className="text-xl text-muted-foreground mt-0">
              Kami melayani service injection, infus, CVT, dan custom modifikasi motor sesuai kebutuhan Anda.
              Lokasi kami di Jalan Desa Kalisuren 02/02 Tajurhalang, Kabupaten Bogor.
              Buka setiap hari Senin-Minggu pukul 08:00-18:00. Untuk emergency service 24/7, hubungi kami di WhatsApp 082124717778.
              Percayakan perawatan motor Anda kepada Prasojo Motor - bengkel motor terpercaya di Bogor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
