import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/rifda-5.jpeg";
import image3 from "../assets/rifda-1.jpeg";
import image4 from "../assets/rifda-2.jpeg";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Kualitas Premium",
    description:
      "Menggunakan bahan aluminium dan kayu berkualitas tinggi yang tahan lama, anti karat, dan anti rayap untuk produk kayu.",
    image: image4,
  },
  {
    title: "Pengerjaan Profesional",
    description:
      "Tim berpengalaman dengan hasil pengerjaan rapi dan presisi. Dikerjakan oleh tenaga ahli profesional.",
    image: image3,
  },
  {
    title: "Garansi & Konsultasi",
    description:
      "Garansi produk dan pemasangan. Konsultasi gratis untuk desain dan pemilihan material yang sesuai kebutuhan.",
    image: image,
  },
];

const featureList: string[] = [
  "Kusen Aluminium",
  "Kusen Kayu",
  "Pintu Aluminium",
  "Jendela Aluminium",
  "Pintu Kayu",
  "Jendela Kayu",
  "Partisi Kaca",
  "Kitchen Set",
  "Panel ACP",
  "Custom Design",
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
          Rifda Jepara
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
                alt="Rifda Jepara feature illustration"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
