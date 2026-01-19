"use client";

import * as React from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle2,
  BookOpen,
  Map,
  Search,
  Sparkles,
  Star,
  Castle,
  Heart,
  Route,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const contactRegex =
  /^(?:\+?\d[\d\s()\-]{6,}|@[a-zA-Z0-9_]{3,}|https?:\/\/t\.me\/[a-zA-Z0-9_]{3,}|[^\s@]+@[^\s@]+\.[^\s@]+)$/;

const directionsList = [
  { id: "neglinka", label: "Неглинка / 38 Меридиан", icon: Map },
  { id: "litprosvet", label: "ЛитПроСвет", icon: BookOpen },
  { id: "astronevod", label: "Астроневод", icon: Star },
  { id: "prazdniki", label: "Праздники / Красота", icon: Sparkles },
  { id: "dzhiva", label: "Джива", icon: Heart },
  { id: "marshruty", label: "Ясные маршруты", icon: Route },
  { id: "izvod", label: "Извод", icon: Search },
  { id: "teremok", label: "Теремок тайн", icon: Castle },
];

const referralOptions = [
  "От друзей/знакомых",
  "Из социальных сетей",
  "Из поиска (Google, Yandex)",
  "Случайно наткнулся",
  "Другое",
];

const signupSchema = z.object({
  name: z.string().min(2, "Введите минимум 2 символа"),
  contact: z
    .string()
    .min(3, "Укажите контакт для связи")
    .regex(contactRegex, "Укажите Telegram, WhatsApp или Email"),
  motivation: z.string().max(500, "Максимум 500 символов").optional(),
  directions: z.array(z.string()).optional(),
  referral: z.string().min(1, "Выберите вариант"),
});

export type SignupFormValues = z.infer<typeof signupSchema>;

type SignupFormProps = {
  ctaSource?: string;
  isOpen?: boolean;
  onSuccess: (values: SignupFormValues) => void;
  onTrack?: (event: string, data?: Record<string, unknown>) => void;
  storageKey?: string;
};

const defaultValues: SignupFormValues = {
  name: "",
  contact: "",
  motivation: "",
  directions: [],
  referral: "",
};

export function SignupForm({
  ctaSource,
  isOpen,
  onSuccess,
  onTrack,
  storageKey = "yasna-signup-draft",
}: SignupFormProps) {
  const [submitState, setSubmitState] = React.useState<
    "idle" | "loading" | "error" | "success"
  >("idle");
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [isMobile, setIsMobile] = React.useState(false);
  const [showOptional, setShowOptional] = React.useState(false);

  const {
    register,
    handleSubmit,
    setFocus,
    reset,
    control,
    formState: { errors, isValid, isSubmitting, touchedFields },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues,
  });

  const motivation = useWatch({ control, name: "motivation" }) ?? "";
  const formValues = useWatch({ control });

  React.useEffect(() => {
    if (!isOpen) return;
    setFocus("name");
    const saved = window.localStorage.getItem(storageKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as SignupFormValues;
        reset({ ...defaultValues, ...parsed });
      } catch {
        window.localStorage.removeItem(storageKey);
      }
    }
  }, [isOpen, reset, setFocus, storageKey]);

  React.useEffect(() => {
    const query = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  React.useEffect(() => {
    if (!isOpen) return;
    const timeout = window.setTimeout(() => {
      window.localStorage.setItem(storageKey, JSON.stringify(formValues));
    }, 300);
    return () => window.clearTimeout(timeout);
  }, [formValues, isOpen, storageKey]);

  const onSubmit = async (values: SignupFormValues) => {
    setSubmitState("loading");
    setSubmitError(null);
    onTrack?.("signup_submit_attempt", { source: ctaSource });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      window.localStorage.removeItem(storageKey);
      onTrack?.("signup_submit_success", { source: ctaSource });
      setSubmitState("success");
      onSuccess(values);
    } catch (error) {
      setSubmitState("error");
      setSubmitError("Что-то пошло не так. Попробуйте ещё раз.");
      onTrack?.("signup_submit_error", { source: ctaSource, error });
    }
  };

  const isDisabled = isSubmitting || submitState === "loading";
  const isNameValid = Boolean(touchedFields.name && !errors.name);
  const isContactValid = Boolean(touchedFields.contact && !errors.contact);

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2 text-center">
        <h3 className="text-2xl font-semibold text-text">
          Оставьте заявку — мы расскажем о следующих шагах
        </h3>
        <p className="text-sm text-text/70">Никакого спама, только полезная информация</p>
      </div>

      {submitError ? (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {submitError}
        </div>
      ) : null}

      <label className="block text-sm font-medium text-text">
        Имя
        <div className="relative">
          <input
            type="text"
            placeholder="Как к вам обращаться?"
            autoComplete="name"
            className={`mt-2 min-h-[44px] w-full rounded-lg border px-3 py-3 pr-10 text-sm transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:shadow-sm ${
              errors.name
                ? "border-red-400 animate-shake"
                : isNameValid
                ? "border-emerald-400"
                : "border-primary-100"
            }`}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            disabled={isDisabled}
            {...register("name", {
              onFocus: () => onTrack?.("signup_field_focus", { field: "name" }),
            })}
          />
          <CheckCircle2
            className={cn(
              "pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-emerald-500 transition-opacity",
              isNameValid ? "opacity-100" : "opacity-0"
            )}
            aria-hidden="true"
          />
        </div>
        {errors.name ? (
          <p id="name-error" className="mt-1 text-xs text-red-500 animate-slide-down">
            {errors.name.message}
          </p>
        ) : null}
      </label>

      <label className="block text-sm font-medium text-text">
        Контакт
        <div className="relative">
          <input
            type="text"
            inputMode="email"
            autoComplete="email"
            placeholder="Telegram, WhatsApp или Email"
            className={`mt-2 min-h-[44px] w-full rounded-lg border px-3 py-3 pr-10 text-sm transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:shadow-sm ${
              errors.contact
                ? "border-red-400 animate-shake"
                : isContactValid
                ? "border-emerald-400"
                : "border-primary-100"
            }`}
            aria-invalid={Boolean(errors.contact)}
            aria-describedby={errors.contact ? "contact-error" : "contact-helper"}
            disabled={isDisabled}
            {...register("contact", {
              onFocus: () => onTrack?.("signup_field_focus", { field: "contact" }),
            })}
          />
          <CheckCircle2
            className={cn(
              "pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-emerald-500 transition-opacity",
              isContactValid ? "opacity-100" : "opacity-0"
            )}
            aria-hidden="true"
          />
        </div>
        <p id="contact-helper" className="mt-1 text-xs text-text/60">
          Выберите удобный способ связи
        </p>
        {errors.contact ? (
          <p id="contact-error" className="mt-1 text-xs text-red-500 animate-slide-down">
            {errors.contact.message}
          </p>
        ) : null}
      </label>

      {!isMobile ? (
        <label className="block text-sm font-medium text-text">
          Что вас привело к Ясне?
          <textarea
            placeholder="Расскажите в свободной форме..."
            rows={4}
            maxLength={500}
            className={`mt-2 min-h-[120px] w-full rounded-lg border px-3 py-3 text-sm transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:shadow-sm ${
              errors.motivation ? "border-red-400 animate-shake" : "border-primary-100"
            }`}
            aria-invalid={Boolean(errors.motivation)}
            aria-describedby={errors.motivation ? "motivation-error" : "motivation-helper"}
            disabled={isDisabled}
            {...register("motivation", {
              onFocus: () => onTrack?.("signup_field_focus", { field: "motivation" }),
            })}
          />
          <div className="mt-1 flex items-center justify-between text-xs text-text/60">
            <span id="motivation-helper">До 500 символов</span>
            <span>{motivation.length} / 500</span>
          </div>
          {errors.motivation ? (
            <p id="motivation-error" className="mt-1 text-xs text-red-500 animate-slide-down">
              {errors.motivation.message}
            </p>
          ) : null}
        </label>
      ) : (
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => setShowOptional((prev) => !prev)}
            className="min-h-[44px] w-full rounded-lg border border-primary-100 px-3 text-sm text-text/70 transition-colors hover:bg-primary-50"
          >
            {showOptional ? "Скрыть дополнительный вопрос" : "Добавить сообщение (необязательно)"}
          </button>
          {showOptional ? (
            <label className="block text-sm font-medium text-text">
              Что вас привело к Ясне?
              <textarea
                placeholder="Расскажите в свободной форме..."
                rows={4}
                maxLength={500}
            className={`mt-2 min-h-[120px] w-full rounded-lg border px-3 py-3 text-sm transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:shadow-sm ${
                  errors.motivation ? "border-red-400 animate-shake" : "border-primary-100"
                }`}
                aria-invalid={Boolean(errors.motivation)}
                aria-describedby={errors.motivation ? "motivation-error" : "motivation-helper"}
                disabled={isDisabled}
                {...register("motivation", {
                  onFocus: () => onTrack?.("signup_field_focus", { field: "motivation" }),
                })}
              />
              <div className="mt-1 flex items-center justify-between text-xs text-text/60">
                <span id="motivation-helper">До 500 символов</span>
                <span>{motivation.length} / 500</span>
              </div>
              {errors.motivation ? (
                <p id="motivation-error" className="mt-1 text-xs text-red-500 animate-slide-down">
                  {errors.motivation.message}
                </p>
              ) : null}
            </label>
          ) : null}
        </div>
      )}

      <fieldset className="space-y-3 rounded-lg border border-primary-100 p-4">
        <legend className="text-sm font-medium text-text">
          Интересующие направления
        </legend>
        <p className="text-xs text-text/60">Можно выбрать несколько</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {directionsList.map((direction) => {
            const Icon = direction.icon;
            return (
              <label
                key={direction.id}
                className="flex min-h-[44px] cursor-pointer items-center gap-2 rounded-lg border border-primary-100 px-3 py-2 text-sm text-text/70 transition-colors hover:bg-primary-50"
              >
                <input
                  type="checkbox"
                  value={direction.label}
                  className="peer sr-only"
                  disabled={isDisabled}
                  {...register("directions", {
                    onChange: () =>
                      onTrack?.("signup_field_interaction", { field: "directions" }),
                  })}
                />
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-50 text-primary peer-checked:bg-primary peer-checked:text-white">
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="flex-1">{direction.label}</span>
                <CheckCircle2 className="h-4 w-4 text-primary opacity-0 peer-checked:opacity-100" />
              </label>
            );
          })}
        </div>
      </fieldset>

      <label className="block text-sm font-medium text-text">
        Как узнали о нас?
        <select
          className={`mt-2 min-h-[44px] w-full rounded-lg border px-3 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
            errors.referral ? "border-red-400" : "border-primary-100"
          }`}
          aria-invalid={Boolean(errors.referral)}
          aria-describedby={errors.referral ? "referral-error" : undefined}
          disabled={isDisabled}
          {...register("referral", {
            onFocus: () => onTrack?.("signup_field_focus", { field: "referral" }),
          })}
        >
          <option value="">Выберите вариант</option>
          {referralOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.referral ? (
          <p id="referral-error" className="mt-1 text-xs text-red-500">
            {errors.referral.message}
          </p>
        ) : null}
      </label>

      <div className="space-y-2 text-sm text-text/70">
        <p>✓ Мы ответим в течение 2-3 дней</p>
        <p>✓ Вы получите ссылки на материалы</p>
        <p>✓ Сможете задать любые вопросы</p>
        <p>✓ Никакой спам — только по вашему запросу</p>
      </div>

      <Button
        type="submit"
        className="w-full min-h-[48px]"
        isLoading={submitState === "loading"}
        disabled={!isValid || isDisabled}
      >
        {submitState === "loading"
          ? "Отправляем..."
          : submitState === "error"
          ? "Попробовать снова"
          : "Отправить заявку"}
      </Button>

      <p className="text-center text-xs text-text/60">
        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
      </p>
    </form>
  );
}
