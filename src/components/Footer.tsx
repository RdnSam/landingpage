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
            Skoola
          </a>
          <p className="mt-2 text-sm text-muted-foreground">
            Platform absensi sekolah digital berbasis wajah, lokasi, dan QR code.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Ikuti Kami</h3>
          <a href="#" className="opacity-60 hover:opacity-100">
            Instagram
          </a>
          <a href="#" className="opacity-60 hover:opacity-100">
            LinkedIn
          </a>
          <a href="#" className="opacity-60 hover:opacity-100">
            TikTok
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Platform</h3>
          <a href="#" className="opacity-60 hover:opacity-100">
            Android
          </a>
          <a href="#" className="opacity-60 hover:opacity-100">
            iOS (Coming Soon)
          </a>
          <a href="#" className="opacity-60 hover:opacity-100">
            Web Dashboard
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Informasi</h3>
          <a href="#features" className="opacity-60 hover:opacity-100">
            Fitur
          </a>
          <a href="#pricing" className="opacity-60 hover:opacity-100">
            Paket Harga
          </a>
          <a href="#faq" className="opacity-60 hover:opacity-100">
            FAQ
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Komunitas</h3>
          <a href="#" className="opacity-60 hover:opacity-100">
            Sekolah Mitra
          </a>
          <a href="#" className="opacity-60 hover:opacity-100">
            Forum Guru
          </a>
          <a href="#" className="opacity-60 hover:opacity-100">
            Webinar Skoola
          </a>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 Skoola — Dibuat dengan ❤️ oleh{" "}
          <a href="">Skoola Dev</a>        </h3>
      </section>
    </footer>
  );
};
