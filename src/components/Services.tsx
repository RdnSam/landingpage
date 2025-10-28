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
    title: "Kusen Aluminium & Kayu",
    description:
      "Kusen aluminium dan kayu berkualitas tinggi untuk pintu dan jendela rumah Anda. Tersedia berbagai pilihan warna dan desain sesuai kebutuhan.",
    icon: <ChartIcon />,
  },
  {
    title: "Pintu & Jendela",
    description:
      "Pintu dan jendela aluminium/kayu dengan desain modern dan klasik. Kuat, tahan lama, dan anti rayap untuk jendela kayu.",
    icon: <WalletIcon />,
  },
  {
    title: "Partisi Kaca & ACP",
    description:
      "Partisi kaca untuk ruangan modern dan panel ACP untuk eksterior bangunan. Hasil rapi dan profesional.",
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
    Produk Unggulan{" "}
  </span>
  Rifda Jepara
</h2>

<p className="text-muted-foreground text-xl mt-4 mb-8 ">
  Produk kusen dan aluminium berkualitas tinggi untuk rumah dan bangunan Anda. Pengerjaan profesional dengan hasil memuaskan.
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
