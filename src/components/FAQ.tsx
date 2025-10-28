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
    question: "Berapa biaya service di Prasojo Motor?",
    answer:
      "Biaya service bervariasi tergantung jenis layanan. Service rutin mulai dari 50rb, Tune-up 150k-250k, dan Overhaul mulai dari 300k. Kami memberikan harga transparan tanpa biaya tersembunyi.",
    value: "item-1",
  },
  {
    question: "Apakah ada garansi setelah service?",
    answer:
      "Ya, setiap service dilengkapi garansi. Service Rutin 7 hari, Tune-up 14 hari, dan Overhaul/belah mesin 30 hari.",
    value: "item-2",
  },
  {
    question: "Apakah melayani semua jenis motor?",
    answer:
      "Ya! Prasojo Motor melayani semua jenis motor, baik matic, bebek, sport, maupun motor tua. Mekanik kami berpengalaman menangani berbagai merk dan tipe.",
    value: "item-3",
  },
  {
    question: "Apakah tersedia layanan emergency?",
    answer:
      "Ya, kami menyediakan emergency service 24/7. Silakan hubungi kami di 082124717778 untuk bantuan darurat.",
    value: "item-4",
  },
  {
    question: "Bagaimana cara booking service?",
    answer:
      "Anda bisa langsung datang ke bengkel di Jalan Desa Kalisuren 02/02 Tajurhalang, Kab. Bogor (buka 08:00-18:00) atau hubungi kami via WhatsApp di 082124717778 untuk konsultasi dan booking.",
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
    href="https://wa.me/6282124717778?text=Halo%20Prasojo%20Motor%2C%20saya%20ingin%20konsultasi"
    className="text-primary transition-all border-primary hover:border-b-2"
  >
    Hubungi kami via WhatsApp
  </a>
</h3>

    </section>
  );
};
