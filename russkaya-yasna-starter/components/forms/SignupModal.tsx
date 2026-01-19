"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, Plus, Send, X } from "lucide-react";

import { FormSuccess } from "@/components/forms/FormSuccess";
import { SignupForm, type SignupFormValues } from "@/components/forms/SignupForm";
import { Button } from "@/components/ui/button";

type SignupModalContextValue = {
  openModal: (source: string) => void;
  closeModal: () => void;
  isOpen: boolean;
};

const SignupModalContext = React.createContext<SignupModalContextValue | null>(null);

const modalVariants = {
  hidden: { opacity: 0, scale: 0.98, y: 24 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, scale: 0.98, y: 16, transition: { duration: 0.15 } },
};

function trackEvent(event: string, payload?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent("yasna:analytics", {
      detail: {
        event,
        ...payload,
      },
    })
  );
  console.info("[analytics]", event, payload);
}

export function useSignupModal() {
  const context = React.useContext(SignupModalContext);
  if (!context) {
    throw new Error("useSignupModal must be used within SignupModalProvider");
  }
  return context;
}

export function SignupModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [ctaSource, setCtaSource] = React.useState<string | null>(null);
  const [submittedValues, setSubmittedValues] = React.useState<SignupFormValues | null>(null);

  const openModal = React.useCallback((source: string) => {
    setCtaSource(source);
    setIsSuccess(false);
    setIsOpen(true);
    trackEvent("signup_open", { source });
  }, []);

  const closeModal = React.useCallback(() => {
    setIsOpen(false);
    setIsSuccess(false);
    trackEvent("signup_close", { source: ctaSource });
  }, [ctaSource]);

  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal]);

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  React.useEffect(() => {
    if (!isSuccess) return;
    const timer = window.setTimeout(() => {
      closeModal();
    }, 5000);
    return () => window.clearTimeout(timer);
  }, [isSuccess, closeModal]);

  const handleSuccess = React.useCallback(
    (values: SignupFormValues) => {
      setSubmittedValues(values);
      setIsSuccess(true);
      trackEvent("signup_success", { source: ctaSource, values });
    },
    [ctaSource]
  );

  return (
    <SignupModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
      <SignupModal
        isOpen={isOpen}
        isSuccess={isSuccess}
        ctaSource={ctaSource ?? "unknown"}
        submittedValues={submittedValues}
        onClose={closeModal}
        onSuccess={handleSuccess}
      />
      <FloatingActionMenu
        isModalOpen={isOpen}
        onOpen={() => openModal("floating-cta")}
      />
    </SignupModalContext.Provider>
  );
}

type SignupModalProps = {
  isOpen: boolean;
  isSuccess: boolean;
  ctaSource: string;
  submittedValues: SignupFormValues | null;
  onClose: () => void;
  onSuccess: (values: SignupFormValues) => void;
};

export function SignupModal({
  isOpen,
  isSuccess,
  ctaSource,
  submittedValues,
  onClose,
  onSuccess,
}: SignupModalProps) {
  const touchStartY = React.useRef<number | null>(null);
  const touchCurrentY = React.useRef<number | null>(null);

  const handleTouchStart = React.useCallback((event: React.TouchEvent<HTMLDivElement>) => {
    touchStartY.current = event.touches[0]?.clientY ?? null;
    touchCurrentY.current = touchStartY.current;
  }, []);

  const handleTouchMove = React.useCallback((event: React.TouchEvent<HTMLDivElement>) => {
    touchCurrentY.current = event.touches[0]?.clientY ?? null;
  }, []);

  const handleTouchEnd = React.useCallback(
    (event: React.TouchEvent<HTMLDivElement>) => {
      if (touchStartY.current === null || touchCurrentY.current === null) return;
      const deltaY = touchCurrentY.current - touchStartY.current;
      if (deltaY > 90 && event.currentTarget.scrollTop === 0) {
        onClose();
      }
      touchStartY.current = null;
      touchCurrentY.current = null;
    },
    [onClose]
  );

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 px-0 py-0 sm:items-center sm:px-4 sm:py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="signup-modal-title"
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative h-full w-full overflow-y-auto bg-white p-6 shadow-xl sm:h-auto sm:max-h-[90vh] sm:max-w-[600px] sm:rounded-2xl"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute left-4 top-4 rounded-full border border-primary-100 p-2 text-text/60 transition-colors hover:bg-primary-50 sm:left-auto sm:right-4"
              aria-label="Закрыть форму"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <div id="signup-modal-title" className="sr-only">
              Форма заявки
            </div>

            {isSuccess ? (
              <FormSuccess onClose={onClose} />
            ) : (
              <SignupForm
                ctaSource={ctaSource}
                isOpen={isOpen}
                onSuccess={onSuccess}
                onTrack={(event, payload) => trackEvent(event, { source: ctaSource, ...payload })}
                storageKey={`yasna-signup-draft-${ctaSource}`}
              />
            )}

            {submittedValues ? (
              <p className="mt-4 text-center text-xs text-text/60">
                Заявка отправлена: {submittedValues.name}
              </p>
            ) : null}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function FloatingActionMenu({
  onOpen,
  isModalOpen,
}: {
  onOpen: () => void;
  isModalOpen: boolean;
}) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 160);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (!isVisible) {
      setIsExpanded(false);
    }
  }, [isVisible]);

  const handleScrollToEvents = React.useCallback(() => {
    const section = document.getElementById("events");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  if (!isVisible || isModalOpen) return null;

  return (
    <div
      className="fixed right-6 z-40 md:hidden"
      style={{ bottom: "calc(1.5rem + env(safe-area-inset-bottom))" }}
    >
      <div className="flex flex-col items-end gap-3">
        <AnimatePresence>
          {isExpanded ? (
            <motion.div
              id="fab-actions"
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="flex flex-col gap-2"
            >
              <button
                type="button"
                onClick={() => {
                  onOpen();
                  setIsExpanded(false);
                }}
                className="flex min-h-[44px] items-center gap-2 rounded-full bg-white px-4 text-sm font-medium text-text shadow-lg"
              >
                Оставить заявку
              </button>
              <button
                type="button"
                onClick={() => {
                  handleScrollToEvents();
                  setIsExpanded(false);
                }}
                className="flex min-h-[44px] items-center gap-2 rounded-full bg-white px-4 text-sm font-medium text-text shadow-lg"
              >
                <CalendarDays className="h-4 w-4 text-accent" aria-hidden="true" />
                Смотреть мероприятия
              </button>
              <button
                type="button"
                onClick={() => {
                  window.open("https://t.me/russkaya_yasna", "_blank");
                  setIsExpanded(false);
                }}
                className="flex min-h-[44px] items-center gap-2 rounded-full bg-white px-4 text-sm font-medium text-text shadow-lg"
              >
                <Send className="h-4 w-4 text-accent" aria-hidden="true" />
                Telegram
              </button>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <Button
          onClick={() => setIsExpanded((open) => !open)}
          className="h-12 w-12 rounded-full p-0 shadow-lg"
          aria-label={isExpanded ? "Скрыть быстрые действия" : "Открыть быстрые действия"}
          aria-expanded={isExpanded}
          aria-controls="fab-actions"
        >
          <Plus
            className={isExpanded ? "rotate-45 transition-transform" : "transition-transform"}
            aria-hidden="true"
          />
        </Button>
      </div>
    </div>
  );
}
