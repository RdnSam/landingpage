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

const roles = ["Walk-in", "Booking", "Emergency"] as const;
type RoleType = typeof roles[number];

interface StepCard {
  title: string;
  description: string;
  image: string;
}

const roleSteps: Record<RoleType, StepCard[]> = {
  "Walk-in": [
    {
      title: "Datang Langsung",
      description: "Kunjungi bengkel kami di Jl. Desa Kalisuren 02/02, Tajurhalang.",
      image: faceImage,
    },
    {
      title: "Konsultasi Gratis",
      description: "Ceritakan keluhan motor Anda ke mekanik kami.",
      image: clockImage,
    },
    {
      title: "Pengecekan Motor",
      description: "Mekanik akan melakukan pengecekan menyeluruh kondisi motor.",
      image: clockImage,
    },
    {
      title: "Estimasi Biaya",
      description: "Kami berikan estimasi biaya yang transparan sebelum service.",
      image: notifImage,
    },
    {
      title: "Proses Service",
      description: "Service dikerjakan oleh mekanik berpengalaman dengan garansi.",
      image: notifImage,
    },
  ],
  Booking: [
    {
      title: "Hubungi WhatsApp",
      description: "Chat kami di 082124717778 untuk booking service.",
      image: faceImage,
    },
    {
      title: "Pilih Jadwal",
      description: "Tentukan waktu yang sesuai untuk service motor Anda.",
      image: clockImage,
    },
    {
      title: "Konfirmasi Booking",
      description: "Kami akan konfirmasi jadwal dan jenis service yang diperlukan.",
      image: clockImage,
    },
    {
      title: "Datang Sesuai Jadwal",
      description: "Kunjungi bengkel sesuai jadwal yang telah disepakati.",
      image: notifImage,
    },
    {
      title: "Service & Selesai",
      description: "Motor Anda akan di-service sesuai paket yang dipilih.",
      image: notifImage,
    },
  ],
  Emergency: [
    {
      title: "Hubungi 24/7",
      description: "Telepon atau WA ke 082124717778 untuk emergency service.",
      image: faceImage,
    },
    {
      title: "Jelaskan Kondisi",
      description: "Beritahu kondisi dan lokasi motor Anda saat ini.",
      image: clockImage,
    },
    {
      title: "Tunggu Tim Kami",
      description: "Tim emergency kami akan segera menuju lokasi Anda.",
      image: notifImage,
    },
    {
      title: "Penanganan Cepat",
      description: "Mekanik akan melakukan penanganan awal di lokasi atau bawa ke bengkel.",
      image: notifImage,
    },
  ],
};

export const HowItWorks = () => {
  const [activeRole, setActiveRole] = useState<RoleType>("Walk-in");

  return (
    <section className="container py-24" id="how-it-works">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
        Cara Service di <span className="text-primary">Prasojo Motor</span>
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