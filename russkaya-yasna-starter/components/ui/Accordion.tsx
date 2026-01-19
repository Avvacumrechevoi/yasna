"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { animationDurations, animationEasings } from "@/lib/animation-config";
import { listItemVariants, staggerChildren } from "@/lib/animation-variants";

export type AccordionItem = {
  id: string;
  question: React.ReactNode;
  answer: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpenIds?: string[];
  className?: string;
};

export function Accordion({
  items,
  allowMultiple = false,
  defaultOpenIds = [],
  className,
}: AccordionProps) {
  const [openIds, setOpenIds] = React.useState<string[]>(defaultOpenIds);
  const shouldReduceMotion = useReducedMotion();

  const toggleItem = (id: string) => {
    setOpenIds((current) => {
      const isOpen = current.includes(id);
      if (allowMultiple) {
        return isOpen ? current.filter((item) => item !== id) : [...current, id];
      }
      return isOpen ? [] : [id];
    });
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerChildren(shouldReduceMotion)}
      className={cn("overflow-hidden rounded-2xl border border-primary-100", className)}
    >
      {items.map((item, index) => {
        const isOpen = openIds.includes(item.id);
        const isOdd = index % 2 === 1;
        return (
          <motion.div
            key={item.id}
            variants={listItemVariants(shouldReduceMotion)}
            className={cn(
              "border-b border-primary-100 last:border-b-0",
              isOdd ? "bg-primary-50/60" : "bg-white"
            )}
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  toggleItem(item.id);
                }
              }}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[1.1rem] font-semibold text-primary transition-colors hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              aria-expanded={isOpen}
              aria-controls={`${item.id}-content`}
            >
              <span>{item.question}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-primary transition-transform",
                  isOpen ? "rotate-180" : "rotate-0"
                )}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={`${item.id}-content`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : {
                          height: {
                            duration: animationDurations.slow,
                            ease: animationEasings.easeOut,
                          },
                          opacity: {
                            duration: animationDurations.normal,
                            delay: 0.1,
                            ease: animationEasings.easeOut,
                          },
                        }
                  }
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-base leading-relaxed text-text/70">
                    {item.answer}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
