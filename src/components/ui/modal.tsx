// src/components/ui/Modal.tsx
import React, { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  // opsional: tambahkan prop className untuk styling khusus
  className?: string;
}

/**
 * Modal generik: saat open=true, render overlay + content via React portal ke document.body.
 * onClose dipanggil saat klik di overlay atau tombol close di dalam children.
 */
export const Modal: React.FC<ModalProps> = ({ open, onClose, children, className = "" }) => {
  // Saat modal dibuka, tambahkan listener Escape untuk menutup modal
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (open) {
      document.addEventListener("keydown", handleKey);
      // Optional: disable scroll body ketika modal terbuka
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  // Buat elemen overlay + content, dan portal ke document.body
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Latar semi-transparan */}
      <div
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Konten modal */}
      <div
        className={
          "relative z-10 max-w-lg w-full mx-4 " +
          className
        }
      >
        {children}
      </div>
    </div>,
    document.body
  );
};
