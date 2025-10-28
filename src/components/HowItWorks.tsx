import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import faceImage from "../assets/pilot.png";
import clockImage from "../assets/pilot.png";
import notifImage from "../assets/reflecting.png";

const roles = ["Konsultasi", "Survey", "Pemesanan"] as const;
type RoleType = typeof roles[number];

interface StepCard {
  title: string;
  description: string;
  image: string;
}

const roleSteps: Record<RoleType, StepCard[]> = {
  "Konsultasi": [
    {
      title: "Hubungi Kami",
      description: "Chat WhatsApp ke 081398774411 atau kunjungi workshop kami.",
      image: faceImage,
    },
    {
      title: "Konsultasi Kebutuhan",
      description: "Ceritakan kebutuhan kusen, pintu, jendela, atau kitchen set Anda.",
      image: clockImage,
    },
    {
      title: "Diskusi Desain",
      description: "Tim kami membantu menentukan desain dan material yang sesuai.",
      image: clockImage,
    },
    {
      title: "Estimasi Harga",
      description: "Kami berikan estimasi harga yang transparan dan kompetitif.",
      image: notifImage,
    },
  ],
  Survey: [
    {
      title: "Jadwalkan Survey",
      description: "Tentukan waktu untuk survey lokasi proyek Anda.",
      image: faceImage,
    },
    {
      title: "Kunjungan Lokasi",
      description: "Tim kami datang untuk mengukur dan survey lokasi secara gratis.",
      image: clockImage,
    },
    {
      title: "Pengukuran Detail",
      description: "Kami lakukan pengukuran akurat untuk hasil pemasangan sempurna.",
      image: clockImage,
    },
    {
      title: "Penawaran Final",
      description: "Kami berikan penawaran harga final berdasarkan hasil survey.",
      image: notifImage,
    },
  ],
  Pemesanan: [
    {
      title: "Konfirmasi Pesanan",
      description: "Setujui desain, material, dan harga yang telah disepakati.",
      image: faceImage,
    },
    {
      title: "Pembayaran DP",
      description: "Lakukan pembayaran down payment untuk memulai produksi.",
      image: clockImage,
    },
    {
      title: "Proses Produksi",
      description: "Tim produksi mulai mengerjakan pesanan Anda dengan material premium.",
      image: notifImage,
    },
    {
      title: "Pemasangan",
      description: "Tim profesional kami memasang produk di lokasi dengan rapi.",
      image: notifImage,
    },
    {
      title: "Selesai & Garansi",
      description: "Proyek selesai dengan hasil memuaskan dan dilengkapi garansi.",
      image: notifImage,
    },
  ],
};

export const HowItWorks = () => {
  const [activeRole, setActiveRole] = useState<RoleType>("Konsultasi");

  return (
    <section className="container py-24" id="how-it-works">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
        Cara Pesan di <span className="text-primary">Rifda Jepara</span>
      </h2>

      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {roles.map((role) => (
          <button
            key={role}
            onClick={() => setActiveRole(role)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
              activeRole === role
                ? "bg-primary text-white"
                : "bg-muted hover:bg-primary/10"
            }`}
          >
            {role}
          </button>
        ))}
      </div>

      <motion.div
        key={activeRole}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {roleSteps[activeRole].map(({ title, description, image }) => (
          <Card key={title} className="bg-muted/50 text-center">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={image}
                alt={title}
                className="w-40 h-40 mx-auto mb-4"
              />
              <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </section>
  );
};