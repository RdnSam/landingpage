import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { LightBulbIcon } from "./Icons";


export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="https://i.pravatar.cc/150?img=32"
            />
            <AvatarFallback>PB</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Pak Budi</CardTitle>
            <CardDescription>Rumah Minimalis Tajurhalang</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          Pasang kusen aluminium dan jendela untuk rumah baru saya di Rifda Jepara. Hasilnya rapi, harga bersaing, dan pengerjaan cepat!
        </CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://i.pravatar.cc/150?img=58"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Rifda Jepara</CardTitle>
          <CardDescription className="font-normal text-primary">
            Kusen Aluminium & Kayu Berkualitas
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            Kami hadir untuk menyediakan kusen aluminium, kayu, kitchen set, dan ACP berkualitas dengan harga transparan dan garansi produk.
          </p>
        </CardContent>

   <CardFooter>
  <div className="flex gap-2">
    {/* Facebook */}
    <a
      rel="noreferrer noopener"
      href="https://www.facebook.com/share/1CD7D3QYTd/"
      target="_blank"
      className={buttonVariants({
        variant: "ghost",
        size: "sm",
      })}
    >
      <span className="sr-only">Facebook icon</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-foreground"
      >
        <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.333v21.333C0 23.403.597 24 1.333 24H12.82v-9.294H9.692v-3.622h3.128V8.41c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.588l-.467 3.622h-3.121V24h6.116C23.403 24 24 23.403 24 22.667V1.333C24 .597 23.403 0 22.675 0z" />
      </svg>
    </a>

    {/* Twitter (X) */}
    <a
      rel="noreferrer noopener"
      href="https://twitter.com/"
      target="_blank"
      className={buttonVariants({
        variant: "ghost",
        size: "sm",
      })}
    >
      <span className="sr-only">Twitter icon</span>
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-foreground w-5 h-5"
      >
        <title>X</title>
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    </a>

    {/* Instagram */}
    <a
      rel="noreferrer noopener"
      href="https://www.instagram.com/kirasolutions.id?igsh=MTJicXQ5dGZwY3gxbQ=="
      target="_blank"
      className={buttonVariants({
        variant: "ghost",
        size: "sm",
      })}
    >
      <span className="sr-only">Instagram icon</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 fill-foreground"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.4.5.5.2.9.5 1.3 1 .4.4.7.8 1 .9.2.4.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.4-.2.5-.5.9-1 1.3-.4.4-.8.7-.9 1-.4.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.4-.5-.5-.2-.9-.5-1.3-1-.4-.4-.7-.8-1-.9-.2-.4-.4-1.2-.5-2.4-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-2 .5-2.4.2-.5.5-.9 1-1.3.4-.4.8-.7.9-1 .4-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.2 0 6.9.1 5.6.2 4.4.4 3.5.7c-1 .4-1.9 1-2.7 1.8-.8.8-1.4 1.7-1.8 2.7C-.4 6.4-.2 7.6-.1 8.9 0 10.2 0 10.7 0 14s0 3.8.1 5.1c.1 1.3.3 2.5.6 3.4.4 1 .9 1.9 1.7 2.7.8.8 1.7 1.4 2.7 1.8.9.3 2.1.5 3.4.6 1.3.1 1.8.1 5.1.1s3.8 0 5.1-.1c1.3-.1 2.5-.3 3.4-.6 1-.4 1.9-1 2.7-1.8.8-.8 1.4-1.7 1.8-2.7.3-.9.5-2.1.6-3.4.1-1.3.1-1.8.1-5.1s0-3.8-.1-5.1c-.1-1.3-.3-2.5-.6-3.4-.4-1-.9-1.9-1.8-2.7C21.4 1.4 20.5.8 19.5.5c-.9-.3-2.1-.5-3.4-.6C15.2 0 14.7 0 12 0zM12 5.8A6.2 6.2 0 1 0 12 18.2 6.2 6.2 0 1 0 12 5.8zm0 10.2a4 4 0 1 1 0-8.1 4 4 0 0 1 0 8.1zm6.4-11.5a1.4 1.4 0 1 0 0 2.9 1.4 1.4 0 0 0 0-2.9z" />
      </svg>
    </a>
  </div>
</CardFooter>

      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Pintu & Jendela
            <Badge
              variant="secondary"
              className="text-sm text-primary"
            >
              Favorit
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">Hubungi Kami</span>
          </div>

          <CardDescription>
            Pintu dan jendela aluminium/kayu dengan desain modern dan klasik. Kuat, tahan lama, dan anti rayap untuk produk kayu.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Minta Penawaran</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Custom Ukuran", "Garansi Pemasangan", "Material Premium"].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Konsultasi & Survey Gratis</CardTitle>
            <CardDescription className="text-md mt-2">
              Konsultasi gratis untuk kebutuhan kusen, pintu, jendela, dan kitchen set Anda. Survey lokasi gratis dengan penawaran harga transparan.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
