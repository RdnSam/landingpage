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
    userName: "Rumah Minimalis Tajurhalang",
    comment: "Pasang kusen aluminium dan jendela untuk rumah baru saya di Rifda Jepara. Hasilnya rapi, harga bersaing, dan pengerjaan cepat. Recommended!",
  },
  {
    image: "https://i.pravatar.cc/150?img=12",
    name: "Mas Andi",
    userName: "Renovasi Rumah Parung",
    comment:
      "Ganti semua pintu dan jendela kayu dengan aluminium. Kualitas bagus, anti karat, dan pemasangan profesional. Pelayanan ramah dan garansi jelas!",
  },
  {
    image: "https://i.pravatar.cc/150?img=45",
    name: "Mbak Siti",
    userName: "Kitchen Set Custom",
    comment:
      "Kitchen set buatan Rifda Jepara sangat memuaskan! Desain sesuai keinginan, material bagus, dan harga transparan. Pengerjaan juga tepat waktu.",
  },
  {
    image: "https://i.pravatar.cc/150?img=23",
    name: "Bang Rizal",
    userName: "Partisi Kaca Kantor",
    comment:
      "Pasang partisi kaca untuk kantor. Hasilnya elegan dan modern. Tim Rifda Jepara profesional dan hasil pemasangan sangat rapi. Terima kasih!",
  },
  {
    image: "https://i.pravatar.cc/150?img=18",
    name: "Pak Hendra",
    userName: "Kusen Kayu Custom",
    comment:
      "Sudah beberapa kali order kusen kayu untuk proyek rumah klien. Kualitas kayu premium, anti rayap, dan finishing rapi. Langganan terus!",
  },
  {
    image: "https://i.pravatar.cc/150?img=60",
    name: "Doni",
    userName: "Panel ACP Ruko",
    comment:
      "Pasang panel ACP untuk ruko baru. Warna pilihan banyak, pemasangan cepat dan rapi. Harga juga kompetitif. Puas dengan hasilnya!",
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
        Rifda Jepara telah dipercaya oleh ratusan pelanggan di Bogor dan sekitarnya untuk proyek kusen aluminium, kayu, kitchen set, dan ACP berkualitas.
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
