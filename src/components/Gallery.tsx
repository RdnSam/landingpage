import { useState } from "react";
import { getCloudinaryUrl } from "@/lib/cloudinary";
import { X } from "lucide-react";

interface GalleryImage {
  id: string;
  title?: string;
  description?: string;
}

// Galeri foto proyek Rifda Jepara dari Cloudinary
const GALLERY_IMAGES: GalleryImage[] = [
  { id: "WhatsApp_Image_2025-10-30_at_19.21.47_3_ekwylm", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.21.48_1_xwytpp", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.21.48_reuit0", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.21.49_hhc9nn", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.21.49_2_grxvgt", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.21.49_1_nqvhvl", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.21.50_1_n8lpk8", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.21.50_uyscwv", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.21.51_njbma3", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.21.51_1_mmkuc8", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.21.51_2_dgwtb8", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.21.52_vqgfhv", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.21.52_1_qvk3fd", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.21.52_2_vpqxqt", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.21.53_ccxouh", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.21.54_1_el6z4c", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.21.53_1_tbcvrq", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.21.54_yikanl", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.21.55_vvjtzz", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.21.55_1_xwzrxb", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.21.56_flux0c", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.21.55_2_cyqqgl", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.21.57_1_pwijes", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.21.57_gaa44d", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.21.58_1_uyowak", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.21.58_x4j2ud", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.21.59_1_rc9bzk", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.21.59_w9mo5j", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.22.00_dcxanl", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.22.00_1_dqgncm", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.22.00_2_fp2yqj", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.22.01_wr3e5y", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.22.01_1_hdgkd5", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.22.01_2_a9nrzw", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.22.02_1_k07h09", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.22.02_l1yhpy", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.22.02_2_xo8gkv", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.22.03_xslgdr", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.22.03_3_sxh0gu", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.22.04_1_telcph", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.22.03_1_zvkde9", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.22.05_1_ddjbw9", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.22.04_djsmkt", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.22.04_2_vqzl9b", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.22.05_ghuvnn", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.22.05_2_wgkhj1", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.22.07_gatr75", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.22.06_tm51bp", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.22.06_1_rv7hpe", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.22.06_2_jhhhuh", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.22.08_zlnhte", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.22.07_1_naecxa", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.22.09_l9fhnq", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.22.08_2_yv0upg", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.22.03_2_hpzvt3", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.22.08_1_cnhyni", title: "Proyek Rifda Jepara" },
  { id: "WhatsApp_Image_2025-10-30_at_19.22.07_2_tmmqjw", title: "Proyek Rifda Jepara" },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [loadedImages, setLoadedImages] = useState<number>(12); // Load 12 foto pertama

  const loadMore = () => {
    setLoadedImages(prev => Math.min(prev + 12, GALLERY_IMAGES.length));
  };

  return (
    <section id="gallery" className="container py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Galeri{" "}
          </span>
          Proyek Kami
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Lihat berbagai proyek kusen aluminium dan kayu berkualitas yang telah kami kerjakan
        </p>
      </div>

      {/* Grid Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {GALLERY_IMAGES.slice(0, loadedImages).map((image) => (
          <div
            key={image.id}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group bg-muted"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={getCloudinaryUrl(image.id, {
                width: 400,
                height: 400,
                quality: 'auto',
                format: 'auto',
                crop: 'fill',
              })}
              alt={image.title || "Rifda Jepara Gallery"}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
                {image.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {loadedImages < GALLERY_IMAGES.length && (
        <div className="text-center mt-12">
          <button
            onClick={loadMore}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Load More ({GALLERY_IMAGES.length - loadedImages} tersisa)
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-6xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={getCloudinaryUrl(selectedImage.id, {
                width: 1920,
                quality: 'auto',
                format: 'auto',
                crop: 'limit',
              })}
              alt={selectedImage.title || "Rifda Jepara Gallery"}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            {selectedImage.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
                <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
                {selectedImage.description && (
                  <p className="text-gray-300 mt-1">{selectedImage.description}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
