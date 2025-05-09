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
    question: "Apakah Skoola gratis digunakan?",
    answer:
      "Ya, Skoola menyediakan paket gratis untuk percobaan di 1 kelas dengan fitur dasar seperti absensi wajah dan QR Code.",
    value: "item-1",
  },
  {
    question: "Apakah bisa absen menggunakan wajah?",
    answer:
      "Bisa. Skoola mendukung absensi menggunakan teknologi face recognition dan akan mencatat lokasi otomatis.",
    value: "item-2",
  },
  {
    question: "Apakah Skoola bisa digunakan oleh guru dan siswa?",
    answer:
      "Skoola mendukung multi-role. Guru, siswa, dan admin sekolah memiliki akun dan dashboard masing-masing.",
    value: "item-3",
  },
  {
    question: "Apakah tersedia laporan bulanan dan harian?",
    answer:
      "Ya. Skoola menyediakan rekap kehadiran harian dan bulanan secara otomatis dalam format yang siap diunduh.",
    value: "item-4",
  },
  {
    question: "Bagaimana jika saya ingin integrasi dengan sistem sekolah lain?",
    answer:
      "Untuk kebutuhan integrasi dan custom API, Anda dapat menggunakan paket Enterprise. Silakan hubungi tim kami untuk penyesuaian.",
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
    href="#"
    className="text-primary transition-all border-primary hover:border-b-2"
  >
    Hubungi tim kami
  </a>
</h3>

    </section>
  );
};
