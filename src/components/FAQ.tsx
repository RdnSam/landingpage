import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Berapa harga kusen aluminium dan kayu di Rifda Jepara?",
    answer:
      "Harga bervariasi tergantung jenis material, ukuran, dan desain yang Anda pilih. Untuk kusen aluminium, pintu, jendela, kitchen set, dan panel ACP, silakan hubungi kami untuk penawaran terbaik. Kami memberikan harga transparan dan kompetitif.",
    value: "item-1",
  },
  {
    question: "Apakah ada garansi untuk produk dan pemasangan?",
    answer:
      "Ya, semua produk kami dilengkapi dengan garansi kualitas. Kusen aluminium garansi anti karat, kusen kayu anti rayap, dan garansi pemasangan untuk memastikan hasil yang rapi dan tahan lama.",
    value: "item-2",
  },
  {
    question: "Apakah bisa custom desain dan ukuran?",
    answer:
      "Tentu saja! Rifda Jepara menerima custom desain untuk kusen, pintu, jendela, kitchen set, dan partisi kaca sesuai kebutuhan Anda. Tim kami akan membantu mewujudkan desain impian Anda.",
    value: "item-3",
  },
  {
    question: "Berapa lama pengerjaan proyek?",
    answer:
      "Waktu pengerjaan tergantung pada kompleksitas dan skala proyek. Untuk proyek standar, biasanya 1-2 minggu. Kami akan memberikan estimasi waktu yang jelas setelah survey lokasi.",
    value: "item-4",
  },
  {
    question: "Bagaimana cara konsultasi dan pemesanan?",
    answer:
      "Anda bisa langsung datang ke workshop kami di Jalan Falah RT 02/02 Kalisuren, Tajurhalang, Parung, Bogor (buka Senin-Minggu 06:00-18:00) atau hubungi via WhatsApp di 081398774411 untuk konsultasi gratis dan survey lokasi.",
    value: "item-5",
  },
];


export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
  Pertanyaan yang{" "}
  <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
    Sering Ditanyakan
  </span>
</h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>


<h3 className="font-medium mt-4">
  Masih ada pertanyaan?{" "}
  <a
    rel="noreferrer noopener"
    href="https://wa.me/6281398774411?text=Halo%20Rifda%20Jepara%2C%20saya%20ingin%20konsultasi"
    className="text-primary transition-all border-primary hover:border-b-2"
  >
    Hubungi kami via WhatsApp
  </a>
</h3>

    </section>
  );
};
