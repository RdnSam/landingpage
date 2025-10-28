import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards"; // bisa ganti jadi gambar mobil showcase
import { Phone } from "lucide-react";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold text-center">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#FF7E5F] to-[#FD3A69] text-transparent bg-clip-text">
              Rifda Jepara
            </span>{" "}
            Kusen Aluminium &{" "}
            <span className="inline bg-gradient-to-r from-[#43CEA2] via-[#185A9D] to-[#0F2027] text-transparent bg-clip-text">
              Kayu Berkualitas
            </span>{" "}
          </h1>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Spesialis kusen aluminium, pintu, jendela, partisi kaca, kitchen set, dan ACP berkualitas tinggi di Bogor. Pengerjaan profesional dengan hasil memuaskan.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Lihat Produk</Button>

          <a
            rel="noreferrer noopener"
            href="https://wa.me/6281398774411?text=Halo%20Rifda%20Jepara%2C%20saya%20ingin%20konsultasi%20kusen"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Hubungi Kami
            <Phone className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        {/* Ganti HeroCards jadi showcase mobil */}
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
