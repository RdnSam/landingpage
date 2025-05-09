import { Statistics } from "./Statistics";
import pilot from "../assets/pilot2.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt="Ilustrasi Absensi Digital"
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Tentang{" "}
                </span>
                Skoola
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Skoola adalah platform absensi digital berbasis wajah, lokasi, dan QR code
                yang dirancang khusus untuk kebutuhan sekolah. Dengan fitur lengkap
                seperti rekap otomatis, cuti siswa, notifikasi, dan laporan kehadiran,
                Skoola membantu sekolah menjadi lebih efisien dan modern.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};

