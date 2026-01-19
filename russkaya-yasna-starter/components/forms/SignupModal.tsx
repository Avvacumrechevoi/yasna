"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { FormSuccess } from "@/components/forms/FormSuccess";
import { SignupForm, type SignupFormValues } from "@/components/forms/SignupForm";

type SignupModalContextValue = {
  openModal: (source: string) => void;
  closeModal: () => void;
  isOpen: boolean;
};

const SignupModalContext = React.createContext<SignupModalContextValue | null>(null);

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.15 } },
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
      <FloatingSignupButton onOpen={() => openModal("floating-cta")} />
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
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-10"
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
            className="relative w-full max-w-[600px] rounded-2xl bg-white p-6 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full border border-primary-100 p-2 text-text/60 transition-colors hover:bg-primary-50"
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

function FloatingSignupButton({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="fixed bottom-6 right-6 z-40 md:hidden">
      <Button
        onClick={onOpen}
        className="h-12 w-12 rounded-full p-0 shadow-lg"
        aria-label="Открыть форму заявки"
      >
        +
      </Button>
    </div>
  );
}
