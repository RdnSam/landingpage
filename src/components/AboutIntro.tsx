// src/components/AboutIntro.tsx atau src/app/components/AboutIntro.tsx
import React, { useState } from "react";
import rifda1 from "../assets/rifda-1.jpeg";
import rifda2 from "../assets/rifda-2.jpeg";
import rifda3 from "../assets/rifda-3.jpeg";
import rifda4 from "../assets/rifda-4.jpeg";
import rifda5 from "../assets/rifda-5.jpeg";

export const AboutIntro: React.FC = () => {
  // Daftar gambar galeri Rifda Jepara
  const galleryImages = [
    { src: rifda1, alt: "Produk Rifda Jepara 1" },
    { src: rifda2, alt: "Produk Rifda Jepara 2" },
    { src: rifda3, alt: "Produk Rifda Jepara 3" },
    { src: rifda4, alt: "Produk Rifda Jepara 4" },
    { src: rifda5, alt: "Produk Rifda Jepara 5" },
  ];

  // State untuk indeks gambar saat ini
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handler navigasi prev/next dengan wrap-around
  const handlePrev = () => {
    const prev = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prev);
  };
  const handleNext = () => {
    const next = (currentIndex + 1) % galleryImages.length;
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
                Rifda Jepara
              </h2>

              {/* Paragraf pertama */}
              <p className="text-xl text-muted-foreground mt-4">
                Rifda Jepara adalah spesialis kusen aluminium dan kayu berkualitas tinggi di Bogor.
                Kami menyediakan berbagai produk seperti kusen, pintu, jendela aluminium/kayu, kitchen set, partisi kaca, dan panel ACP.
                Tim profesional kami berpengalaman dalam produksi dan pemasangan dengan hasil rapi dan tahan lama.
                Kami berkomitmen memberikan pelayanan terbaik dengan harga transparan dan garansi kualitas.
              </p>

              {/* Image gallery + tombol navigasi */}
              <div className="mt-6 flex items-center justify-center">
                {/* Tombol Previous */}
                <button
                  onClick={handlePrev}
                  aria-label="Previous image"
                  className="
                    p-3 rounded-full bg-primary/10 hover:bg-primary/20
                    focus:outline-none focus:ring-2 focus:ring-primary
                    transition-all text-2xl font-bold
                  "
                >
                  &#8249; {/* karakter ‹ */}
                </button>

                {/* Wrapper image dengan aspect ratio */}
                <div className="mx-4 w-full max-w-3xl">
                  <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={galleryImages[currentIndex].src}
                      alt={galleryImages[currentIndex].alt}
                      className="w-full h-auto object-cover"
                      style={{ maxHeight: "500px" }}
                    />
                  </div>
                </div>

                {/* Tombol Next */}
                <button
                  onClick={handleNext}
                  aria-label="Next image"
                  className="
                    p-3 rounded-full bg-primary/10 hover:bg-primary/20
                    focus:outline-none focus:ring-2 focus:ring-primary
                    transition-all text-2xl font-bold
                  "
                >
                  &#8250; {/* karakter › */}
                </button>
              </div>

              {/* Indikator posisi gambar */}
              <div className="text-center text-sm text-muted-foreground mt-4">
                {currentIndex + 1} / {galleryImages.length}
              </div>
            </div>

            {/* Paragraf kedua, tetap di bawah video */}
            <p className="text-xl text-muted-foreground mt-0">
              Kami menerima custom design sesuai kebutuhan Anda dengan berbagai pilihan material premium.
              Lokasi workshop kami di Jalan Falah RT 02/02 Kalisuren, Tajurhalang, Parung, Bogor.
              Buka setiap hari Senin-Minggu pukul 06:00-18:00. Untuk konsultasi dan survey gratis, hubungi kami di WhatsApp 081398774411.
              Percayakan kebutuhan kusen dan aluminium Anda kepada Rifda Jepara - spesialis kusen berkualitas di Bogor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
