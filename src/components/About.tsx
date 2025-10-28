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
            alt="Rifda Jepara Kusen Berkualitas"
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Tentang{" "}
                </span>
                Rifda Jepara
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Rifda Jepara adalah spesialis kusen aluminium dan kayu berkualitas tinggi yang berlokasi di Jalan Falah RT 02/02 Kalisuren, Tajurhalang, Parung, Bogor.
                Kami menyediakan berbagai produk seperti kusen aluminium, pintu & jendela aluminium/kayu, partisi kaca, kitchen set, dan ACP dengan kualitas terbaik.
                Dengan pengalaman lebih dari 10 tahun dan tim profesional, kepuasan pelanggan adalah prioritas utama kami.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};

