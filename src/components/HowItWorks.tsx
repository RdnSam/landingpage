import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Scan Wajah / QR",
    description:
      "Siswa melakukan absensi dengan scan wajah atau QR code secara otomatis dan cepat.",
  },
  {
    icon: <MapIcon />,
    title: "Deteksi Lokasi",
    description:
      "Sistem akan mencatat lokasi GPS untuk memastikan kehadiran dilakukan di area sekolah.",
  },
  {
    icon: <PlaneIcon />,
    title: "Rekap Otomatis",
    description:
      "Data kehadiran langsung tersimpan dan direkap secara real-time oleh sistem Skoola.",
  },
  {
    icon: <GiftIcon />,
    title: "Notifikasi & Laporan",
    description:
      "Guru dan wali murid menerima notifikasi serta laporan lengkap kehadiran setiap hari.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Cara{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Kerja{" "}
        </span>
        Skoola
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Proses absensi digital Skoola dirancang sederhana dan aman untuk siswa dan guru, dari scan hingga laporan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
