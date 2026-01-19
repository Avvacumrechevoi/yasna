"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Globe, MessageCircle, Send } from "lucide-react";
import Confetti from "react-confetti";

import { Button } from "@/components/ui/button";

type FormSuccessProps = {
  onClose: () => void;
};

export function FormSuccess({ onClose }: FormSuccessProps) {
  const shouldReduceMotion = useReducedMotion();
  const [size, setSize] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    const update = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white p-6 text-center shadow-sm">
      {!shouldReduceMotion && size.width > 0 ? (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Confetti
            width={size.width}
            height={size.height}
            numberOfPieces={140}
            gravity={0.25}
            recycle={false}
          />
        </div>
      ) : null}

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
