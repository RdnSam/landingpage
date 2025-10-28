import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

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
            alt="Prasojo Motor Bengkel Terpercaya"
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Tentang{" "}
                </span>
                Prasojo Motor
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Prasojo Motor adalah bengkel motor profesional yang berlokasi di Jalan Desa Kalisuren 02/02 Tajurhalang, Kabupaten Bogor.
                Kami melayani semua jenis sepeda motor dengan layanan lengkap mulai dari service rutin, tune-up, perbaikan mesin, hingga custom modifikasi.
                Dengan mekanik berpengalaman dan garansi service yang amanah, kepuasan pelanggan adalah prioritas kami.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};

