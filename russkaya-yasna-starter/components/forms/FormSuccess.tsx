"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Globe, MessageCircle, Send } from "lucide-react";

import { Button } from "@/components/ui/button";

type FormSuccessProps = {
  onClose: () => void;
};

const confettiPieces = [
  { left: "10%", delay: 0.1, color: "#C8A882" },
  { left: "25%", delay: 0.2, color: "#4169E1" },
  { left: "40%", delay: 0.05, color: "#2B4570" },
  { left: "55%", delay: 0.3, color: "#C8A882" },
  { left: "70%", delay: 0.15, color: "#4169E1" },
  { left: "85%", delay: 0.25, color: "#2B4570" },
];

export function FormSuccess({ onClose }: FormSuccessProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white p-6 text-center shadow-sm">
      <div className="pointer-events-none absolute inset-0">
        {confettiPieces.map((piece, index) => (
          <motion.span
            key={`${piece.left}-${index}`}
            className="absolute top-0 h-3 w-3 rounded-full"
            style={{ left: piece.left, backgroundColor: piece.color }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 120, rotate: 180 }}
            transition={{
              duration: 2.4,
              delay: piece.delay,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 1.8,
            }}
            aria-hidden="true"
          />
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50"
      >
        <CheckCircle2 className="h-10 w-10 text-green-500" aria-hidden="true" />
      </motion.div>

      <h3 className="mt-4 text-2xl font-semibold text-text">Заявка отправлена!</h3>
      <p className="mt-2 text-sm text-text/70">
        Мы свяжемся с вами в течение 2-3 дней через указанный контакт.
      </p>

      <div className="mt-6 rounded-xl border border-primary-100 bg-primary-50 px-4 py-4 text-left text-sm text-text/70">
        <p className="font-semibold text-text">Пока ждёте, подпишитесь на наши каналы:</p>
        <div className="mt-3 space-y-2">
          <a
            href="https://t.me/russkaya_yasna"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-primary hover:text-primary-600"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            Telegram
          </a>
          <a
            href="https://vk.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-primary hover:text-primary-600"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            VK
          </a>
          <a
            href="https://dzen.ru"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-primary hover:text-primary-600"
          >
            <Globe className="h-4 w-4" aria-hidden="true" />
            Dzen
          </a>
        </div>
      </div>

      <Button
        className="mt-6 w-full"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          onClose();
        }}
      >
        Вернуться на главную
      </Button>
    </div>
  );
}
