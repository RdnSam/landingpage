import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/file.svg";
import image3 from "../assets/clock.svg";
import image4 from "../assets/qr.svg";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Presensi Wajah & QR",
    description:
      "Siswa dapat melakukan absensi hanya dengan scan wajah atau QR code secara cepat dan akurat.",
    image: image4,
  },
  {
    title: "Deteksi Lokasi Otomatis",
    description:
      "Skoola secara otomatis mencatat lokasi absensi, memastikan siswa hadir di area sekolah.",
    image: image3,
  },
  {
    title: "Laporan & Notifikasi Real-time",
    description:
      "Guru, siswa, dan wali murid mendapatkan notifikasi dan laporan kehadiran langsung dari sistem.",
    image: image,
  },
];

const featureList: string[] = [
  "Scan Wajah",
  "QR Code",
  "Deteksi Lokasi",
  "Laporan Kehadiran",
  "Rekap Bulanan",
  "Notifikasi Otomatis",
  "Cuti/Izin Online",
  "Dashboard Admin",
  "Support Android & IOS  ",

];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Fitur Unggulan{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Skoola
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="Skoola feature illustration"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
