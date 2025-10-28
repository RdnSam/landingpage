import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Butuh Kusen Aluminium
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              atau Kitchen Set?{" "}
            </span>
            Kami Siap Membantu
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Rifda Jepara menyediakan kusen aluminium, kayu, pintu, jendela, kitchen set, dan ACP berkualitas dengan harga transparan. Konsultasi gratis sekarang!
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
         <Button
  asChild
  className="w-full md:mr-4 md:w-auto"
>
  <a
    href="https://wa.me/6281398774411?text=Halo%20Rifda%20Jepara%2C%20saya%20ingin%20konsultasi%20kusen%20aluminium"
    target="_blank"
    rel="noopener noreferrer"
  >
    Hubungi via WhatsApp
  </a>
</Button>

          <Button
            variant="outline"
            className="w-full md:w-auto"
            asChild
          >
            <a href="#pricing">
              Lihat Produk Kami
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
