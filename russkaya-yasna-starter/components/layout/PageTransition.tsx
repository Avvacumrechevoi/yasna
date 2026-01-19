"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

import { animationDurations, animationEasings, getMotionPreference } from "@/lib/animation-config";

type PageTransitionProps = {
  children: React.ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const { reduceMotion } = getMotionPreference({
    prefersReducedMotion: Boolean(prefersReducedMotion),
    hardwareConcurrency: typeof navigator !== "undefined" ? navigator.hardwareConcurrency : undefined,
  });

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: reduceMotion ? 0 : animationDurations.normal,
            ease: reduceMotion ? undefined : animationEasings.easeOut,
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: reduceMotion ? 0 : animationDurations.normal,
            ease: reduceMotion ? undefined : animationEasings.easeIn,
          },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
