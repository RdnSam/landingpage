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
import { PaymentModal } from "./payments/PaymentModal"; // sesuaikan path

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
    title: "Service Rutin",
    popular: PopularPlanType.NO,
    price: "Mulai 50rb",
    description: "Paket service berkala untuk motor Anda",
    buttonText: "Konsultasi Sekarang",
    benefitList: [
      "Ganti oli mesin berkualitas",
      "Pengecekan komponen penting",
      "Pembersihan filter udara",
      "Pelumasan rantai",
      "Pengecekan rem & ban",
      "Gratis konsultasi kondisi motor",
      "Garansi service 7 hari"
    ],
  },
  {
    title: "Tune-Up",
    popular: PopularPlanType.YES,
    price: "150k - 250k",
    description: "Tingkatkan performa motor Anda",
    buttonText: "Booking Tune-Up",
    benefitList: [
      "Semua layanan Service Rutin",
      "Setting karburator/injeksi optimal",
      "Pembersihan sistem bahan bakar",
      "Pengecekan sistem kelistrikan",
      "Setting timing pengapian",
      "Tune CVT untuk motor matic",
      "Garansi service 14 hari",
     
    ],
  },
  {
    title: "Overhaul / Belah Mesin",
    popular: PopularPlanType.NO,
    price: "Mulai 300k",
    description: "Perbaikan mesin menyeluruh",
    buttonText: "Konsultasi Overhaul",
    benefitList: [
      "Pembongkaran & analisa mesin lengkap",
      "Penggantian spare part sesuai kebutuhan",
      "Porting & polishing (opsional)",
      "Setting ulang mesin optimal",
      "Service injeksi & infus",
      "Service CVT menyeluruh",
      "Garansi service 30 hari",
      "Custom/modifikasi tersedia",
      "Emergency service 24/7 (call)"
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
          Paket Service{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Prasojo Motor
          </span>
        </h2>
        <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
          Pilih paket service yang sesuai dengan kebutuhan motor Anda. Semua paket bergaransi dan dikerjakan dengan amanah.
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
          accountName="PRASOJO MOTOR"
          phoneNumber="+6282124717778"
        />
      )}
    </>
  );
};
