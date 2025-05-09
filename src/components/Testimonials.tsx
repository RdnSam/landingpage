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
    name: "Bu Ratna",
    userName: "Wali Kelas 9B",
    comment: "Sejak pakai Skoola, saya tidak perlu lagi merekap absen manual. Semua otomatis dan akurat!",
  },
  {
    image: "https://i.pravatar.cc/150?img=12",
    name: "Pak Budi",
    userName: "Guru BK",
    comment:
      "Sangat membantu! Kehadiran siswa bisa dipantau langsung dari dashboard tanpa harus keliling kelas.",
  },
  {
    image: "https://i.pravatar.cc/150?img=45",
    name: "Dita Anggraini",
    userName: "Siswa XII IPA 2",
    comment:
      "Absen jadi lebih cepat, tinggal scan wajah aja. Gak perlu antre tanda tangan lagi.",
  },
  {
    image: "https://i.pravatar.cc/150?img=23",
    name: "Pak Arif",
    userName: "Kepala Sekolah",
    comment:
      "Laporan kehadiran harian dan bulanan dari Skoola sangat membantu evaluasi disiplin siswa.",
  },
  {
    image: "https://i.pravatar.cc/150?img=18",
    name: "Ibu Rina",
    userName: "Orang Tua Siswa",
    comment:
      "Saya bisa langsung dapat notifikasi kalau anak saya absen atau telat. Sangat transparan dan nyaman.",
  },
  {
    image: "https://i.pravatar.cc/150?img=60",
    name: "Rizky",
    userName: "Siswa XI TKJ",
    comment:
      "Keren banget aplikasinya! Bisa absen sambil ngaca 🤭. Fitur wajahnya responsif dan cepat.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Kenapa
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Mereka Suka{" "}
        </span>
        Skoola
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Skoola telah membantu ratusan sekolah dan ribuan siswa dalam mencatat kehadiran
        secara digital, otomatis, dan transparan.
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
