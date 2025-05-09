import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Basic",
    popular: 0,
    price: 0,
    description:
      "Cocok untuk uji coba sistem absensi di 1 kelas atau skala kecil.",
    buttonText: "Coba Gratis",
    benefitList: [
      "1 Kelas aktif",
      "30 Siswa",
      "Scan Wajah & QR",
      "Laporan Kehadiran Harian",
      "Email Dukungan",
    ],
  },
  {
    title: "Skoola Pro",
    popular: 1,
    price: 99,
    description:
      "Paket lengkap untuk sekolah yang ingin digitalisasi penuh absensi dan laporan.",
    buttonText: "Mulai 30 Hari Gratis",
    benefitList: [
      "Semua kelas aktif",
      "Presensi Wajah + Lokasi",
      "QR Code Absen Mapel",
      "Laporan Bulanan & Rekap",
      "Notifikasi Orang Tua",
      "Dashboard Admin & Guru",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 299,
    description:
      "Solusi khusus untuk sekolah besar, yayasan, atau integrasi multi-cabang.",
    buttonText: "Hubungi Kami",
    benefitList: [
      "Multi-Cabang Sekolah",
      "Custom Domain & Branding",
      "Integrasi API & Eksternal DB",
      "Support SLA",
      "Tim Onboarding",
    ],
  },
];


export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
  
      <h2 className="text-3xl md:text-4xl font-bold text-center">
  Pilih Paket{" "}
  <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
    Skoola
  </span>{" "}
  Sesuai Kebutuhan Sekolah Anda
</h2>
<h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
  Dari kelas kecil hingga sekolah besar, Skoola hadir untuk bantu efisiensi presensi.
</h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">${pricing.price}</span>
                <span className="text-muted-foreground"> /month</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
