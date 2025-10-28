import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <LogoIcon />
            Rifda Jepara
          </a>
          <p className="mt-2 text-sm text-muted-foreground">
            Spesialis aluminium, kayu, dan furniture berkualitas di Bogor. Jl. Falah RT 02/02 Kalisuren, Tajurhalang, Parung, Bogor.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Buka: Senin - Minggu, 06:00 - 18:00
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            WA: 081398774411
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Produk</h3>
          <a href="#features" className="opacity-60 hover:opacity-100">
            Kusen Aluminium
          </a>
          <a href="#features" className="opacity-60 hover:opacity-100">
            Pintu & Jendela
          </a>
          <a href="#pricing" className="opacity-60 hover:opacity-100">
            Kitchen Set
          </a>
          <a href="#pricing" className="opacity-60 hover:opacity-100">
            Partisi Kaca & ACP
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Navigasi</h3>
          <a href="#about" className="opacity-60 hover:opacity-100">
            Tentang Kami
          </a>
          <a href="#pricing" className="opacity-60 hover:opacity-100">
            Paket Harga
          </a>
          <a href="#testimonials" className="opacity-60 hover:opacity-100">
            Testimoni
          </a>
          <a href="#faq" className="opacity-60 hover:opacity-100">
            FAQ
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Kontak</h3>
          <a href="https://wa.me/6281398774411" className="opacity-60 hover:opacity-100">
            WhatsApp
          </a>
          <a href="tel:081398774411" className="opacity-60 hover:opacity-100">
            Telepon
          </a>
          <a href="https://maps.google.com/?q=Jalan Falah RT 02/02 Kalisuren Tajurhalang Parung Bogor" className="opacity-60 hover:opacity-100">
            Google Maps
          </a>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 Rifda Jepara — Aluminium, Kayu, Furniture Berkualitas di Bogor
        </h3>
      </section>
    </footer>
  );
};
