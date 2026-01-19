"use client";

import * as React from "react";
import { CalendarDays } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useSignupModal } from "@/components/forms/SignupModal";
import type { DirectionData } from "@/lib/directions-data";

type DirectionCTAProps = {
  direction: DirectionData;
};

export function DirectionCTA({ direction }: DirectionCTAProps) {
  const { openModal } = useSignupModal();

  return (
    <section
      className="px-6 py-16 text-white md:px-8"
      style={{
        background: `linear-gradient(120deg, ${direction.color} 0%, #1A2332 100%)`,
      }}
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">Начните прямо сейчас</h2>
        <p className="max-w-2xl text-sm text-white/80">
          Присоединяйтесь к {direction.stats.participants} и получайте доступ к
          материалам и встречам.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            className="bg-white text-primary hover:bg-white/90"
            onClick={() => openModal(`direction-cta:${direction.slug}`)}
          >
            Оставить заявку
          </Button>
          <Button
            variant="secondary"
            className="border-white/50 text-white hover:bg-white/10"
            onClick={() => window.location.assign("/#events")}
          >
            <CalendarDays className="mr-2 h-4 w-4" aria-hidden="true" />
            Посмотреть мероприятия
          </Button>
        </div>
      </div>
    </section>
  );
}
