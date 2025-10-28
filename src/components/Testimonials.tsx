import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://i.pravatar.cc/150?img=32",
    name: "Pak Budi",
    userName: "Pengguna Yamaha Vixion 2015",
    comment: "Motor tua saya yang udah ngebul sekarang kembali kencang! Service overhaul di Prasojo Motor hasilnya memuaskan, mekaniknya juga profesional dan amanah.",
  },
  {
    image: "https://i.pravatar.cc/150?img=12",
    name: "Mas Andi",
    userName: "Honda Beat 2018",
    comment:
      "Tune-up di sini beda! CVT motor matic saya jadi halus banget. Harga juga transparan, ga ada biaya tersembunyi. Recommended!",
  },
  {
    image: "https://i.pravatar.cc/150?img=45",
    name: "Mbak Siti",
    userName: "Scoopy 2020",
    comment:
      "Bengkel langganan saya sekarang. Service rutin selalu di Prasojo Motor karena mekaniknya jujur dan kasih saran yang bener-bener dibutuhin motor.",
  },
  {
    image: "https://i.pravatar.cc/150?img=23",
    name: "Bang Rizal",
    userName: "Suzuki Satria F150 2012",
    comment:
      "Motor lama saya yang udah lemot sekarang kembali bertenaga setelah tune-up dan service injection. Makasih Prasojo Motor!",
  },
  {
    image: "https://i.pravatar.cc/150?img=18",
    name: "Pak Hendra",
    userName: "Yamaha Mio 2014",
    comment:
      "Sudah beberapa kali service di sini, selalu puas dengan hasilnya. Garansi service juga benar-benar ditepati. Bengkel motor terpercaya!",
  },
  {
    image: "https://i.pravatar.cc/150?img=60",
    name: "Doni",
    userName: "Honda Vario 160 2021",
    comment:
      "Pernah motor mogok malam-malam, langsung telpon ke Prasojo Motor, langsung dibantu. Service emergency-nya cepat dan membantu banget!",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Apa Kata
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Pelanggan Kami{" "}
        </span>
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Prasojo Motor telah dipercaya oleh ratusan pemilik motor di Bogor dan sekitarnya untuk merawat motor kesayangan mereka.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt={name}
                    src={image}
                  />
                  <AvatarFallback>
                    {name.split(" ")[0][0]}
                    {name.split(" ")[1]?.[0]}
                  </AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
