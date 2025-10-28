import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Service Rutin & Ganti Oli",
    description:
      "Perawatan berkala untuk menjaga performa motor tetap optimal. Meliputi penggantian oli, filter, dan pengecekan komponen penting.",
    icon: <ChartIcon />,
  },
  {
    title: "Tune-Up & Perbaikan Mesin",
    description:
      "Tune-up profesional dan perbaikan mesin lengkap termasuk belah mesin/overhaul untuk semua jenis motor.",
    icon: <WalletIcon />,
  },
  {
    title: "Infus, Injection & CVT",
    description:
      "Spesialis service sistem injeksi, infus, dan CVT motor matic dengan teknologi dan alat modern.",
    icon: <MagnifierIcon />,
  },
];


export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
        <h2 className="text-3xl md:text-4xl font-bold">
  <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
    Layanan Unggulan{" "}
  </span>
  Prasojo Motor
</h2>

<p className="text-muted-foreground text-xl mt-4 mb-8 ">
  Layanan service motor lengkap untuk semua jenis motor. Profesional, bergaransi, dan amanah.
</p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
