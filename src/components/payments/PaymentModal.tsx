// src/components/payments/PaymentModal.tsx
import React from "react";
import { Modal } from "@/components/ui/modal";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clipboard } from "lucide-react";

interface PaymentModalProps {
  open: boolean;
  onClose: () => void;
  planTitle: string;
  amount?: string;
  accountNumber?: string;
  bankName?: string;
  accountName?: string;
  phoneNumber?: string;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  open,
  onClose,
  planTitle,
  amount,
  accountNumber = "=",
  bankName = "=",
  accountName = "Rifda Jepara",
  phoneNumber = "=",
}) => {
  const formatPhoneForWa = (phone: string) => phone.replace(/\D/g, "");
  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // jika punya toast/snackbar, pakai itu; contoh sederhana:
      alert("Nomor rekening tersalin!");
    } catch {
      alert("Gagal menyalin.");
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      {/* Gunakan Card agar styling tema konsisten */}
      <Card className="overflow-visible">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">
            Cara Bayar: {planTitle}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {amount && (
            <div className="flex justify-between">
              <span className="font-medium">Jumlah Tagihan:</span>
              <span className="font-semibold">{amount}</span>
            </div>
          )}
          <div className="flex justify-between items-center">
            <span className="font-medium">Nomor Rekening:</span>
            <div className="flex items-center space-x-2">
              <span className="font-mono">{accountNumber}</span>
              <button
                onClick={() => handleCopy(accountNumber!)}
                aria-label="Copy nomor rekening"
                className="p-1 rounded hover:bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <Clipboard className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Bank:</span>
            <span>{bankName}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Atas Nama:</span>
            <span>{accountName}</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Silakan transfer sesuai jumlah yang telah disepakati. Setelah transfer, kirim bukti transfer ke WhatsApp:
          </p>
          <a
            href={`https://wa.me/${formatPhoneForWa(phoneNumber!)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-primary underline font-medium"
          >
            {phoneNumber}
          </a>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={onClose}>Tutup</Button>
        </CardFooter>
      </Card>
    </Modal>
  );
};
