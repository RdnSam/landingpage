// src/components/Pricing.tsx
import React, { useState } from "react";
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
import { PaymentModal } from "./payments/PaymentModal";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number | string;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Kusen Aluminium",
    popular: PopularPlanType.NO,
    price: "Hubungi Kami",
    description: "Kusen aluminium berkualitas untuk rumah Anda",
    buttonText: "Konsultasi Sekarang",
    benefitList: [
      "Bahan aluminium premium",
      "Anti karat & tahan lama",
      "Berbagai pilihan warna",
      "Pemasangan profesional",
      "Garansi produk",
      "Survey & konsultasi gratis",
      "Harga kompetitif"
    ],
  },
  {
    title: "Pintu & Jendela",
    popular: PopularPlanType.YES,
    price: "Hubungi Kami",
    description: "Pintu dan jendela aluminium/kayu berkualitas",
    buttonText: "Minta Penawaran",
    benefitList: [
      "Desain modern & klasik",
      "Aluminium & kayu berkualitas",
      "Anti rayap (untuk kayu)",
      "Kuat & tahan lama",
      "Pemasangan rapi",
      "Garansi pemasangan",
      "Free konsultasi desain",
      "Custom ukuran"
    ],
  },
  {
    title: "Kitchen Set & ACP",
    popular: PopularPlanType.NO,
    price: "Hubungi Kami",
    description: "Kitchen set dan panel ACP premium",
    buttonText: "Konsultasi Proyek",
    benefitList: [
      "Kitchen set custom design",
      "Material berkualitas tinggi",
      "Panel ACP untuk eksterior",
      "Partisi kaca modern",
      "Pengerjaan profesional",
      "Garansi kualitas",
      "Survey lokasi gratis",
      "Harga transparan",
      "Cicilan tersedia"
    ],
  },
];

export const Pricing: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PricingProps | null>(null);

  const handleButtonClick = (plan: PricingProps) => {
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  return (
    <>
      <section id="pricing" className="container py-24 sm:py-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Produk & Layanan{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Rifda Jepara
          </span>
        </h2>
        <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
          Solusi lengkap kusen aluminium, kayu, kitchen set, dan ACP untuk rumah dan bangunan Anda. Hubungi kami untuk penawaran terbaik.
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingList.map((pricing) => (
            <Card
              key={pricing.title}
              className={
                pricing.popular === PopularPlanType.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {pricing.title}
                  {pricing.popular === PopularPlanType.YES && (
                    <Badge variant="secondary" className="text-sm text-primary">
                      Most popular
                    </Badge>
                  )}
                </CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">
                    {typeof pricing.price === "number"
                      ? `Rp${pricing.price.toLocaleString("id-ID")}`
                      : pricing.price}
                  </span>
                </div>
                <CardDescription className="mt-2 text-sm">
                  {pricing.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Button
                  className="w-full"
                  onClick={() => handleButtonClick(pricing)}
                >
                  {pricing.buttonText}
                </Button>
              </CardContent>

              <hr className="w-4/5 m-auto my-4 border-t border-muted-foreground/50" />

              <CardFooter className="flex">
                <div className="space-y-4">
                  {pricing.benefitList.map((benefit: string) => (
                    <span key={benefit} className="flex">
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

      {selectedPlan && (
        <PaymentModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          planTitle={selectedPlan.title}
          amount={
            typeof selectedPlan.price === "number"
              ? `Rp${selectedPlan.price.toLocaleString("id-ID")}`
              : selectedPlan.price
          }
          accountNumber="4812133130"
          bankName="BANK CENTRAL ASIA"
          accountName="RIFDA JEPARA"
          phoneNumber="+6281398774411"
        />
      )}
    </>
  );
};
