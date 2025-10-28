import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/looking-ahead.png";
import image4 from "../assets/cube-leg.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Mekanik Berpengalaman",
    description:
      "Tim mekanik profesional dengan pengalaman bertahun-tahun menangani semua jenis motor dari matic hingga sport.",
    image: image4,
  },
  {
    title: "Garansi Service",
    description:
      "Setiap service yang kami lakukan dilengkapi dengan garansi untuk memastikan kepuasan pelanggan.",
    image: image3,
  },
  {
    title: "Pelayanan Amanah",
    description:
      "Kami bekerja dengan jujur dan amanah, memberikan konsultasi gratis dan harga transparan tanpa biaya tersembunyi.",
    image: image,
  },
];

const featureList: string[] = [
  "Service Rutin",
  "Ganti Oli",
  "Tune-Up",
  "Perbaikan Mesin",
  "Belah Mesin / Overhaul",
  "Service Injection",
  "Service CVT",
  "Infus Motor",
  "Custom/Modifikasi",
  "Emergency Service",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Keunggulan{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Prasojo Motor
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
                alt="Prasojo Motor feature illustration"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
