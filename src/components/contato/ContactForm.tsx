"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { toastError, toastInfo, toastSuccess } from "@/lib/toastUtils";
import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const t = useTranslations("contact.form");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    //guardando a chave com nome aleatorio para dificultar para possiveis bots
    const STORAGE_KEY = "🍌_banana_power_🚀";
    const COOLDOWN = 2 * 60 * 1000;
    const lastSent = localStorage.getItem(STORAGE_KEY);
    const now = Date.now();

    //verificaçao se esta apto a enviar novamente
    if (lastSent) {
      const elapsed = now - Number(lastSent);
      const remaining = COOLDOWN - elapsed;

      if (remaining > 0) {
        const seconds = Math.floor((remaining / 1000) % 60);
        const minutes = Math.floor(remaining / 1000 / 60);

        const plural = (value: number) => (value !== 1 ? "s" : "");

        //montando a string da maensagem traduzida
        const timeString =
          minutes > 0
            ? t("rateLimitMinutesAndSeconds", {
                minutes,
                pluralMinute: plural(minutes),
                seconds,
                pluralSecond: plural(seconds),
              })
            : t("rateLimitSecondsOnly", {
                seconds,
                pluralSecond: plural(seconds),
              });

        toastInfo(timeString);
        return;
      }
    }
    //se passar pela verificaçao de tempo monta o envio do email
    try {
      const toEmail = process.env.NEXT_PUBLIC_EMAILJS_FROM_EMAIL
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          email: data.email,
          message: data.message,
          to_email: toEmail,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );

      localStorage.setItem(STORAGE_KEY, now.toString());
      toastSuccess(t("toastSucess"));
      reset();
    } catch (error) {
      //em caso de erro
      toastError(t("toastError") || "Erro ao enviar o email, tente novamente.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 w-full"
    >
      {/* Nome */}
      <div className="flex flex-col space-y-1">
        <Input
          placeholder={t("namePlaceholder")}
          {...register("name", { required: t("nameRequired") })}
          className={cn(
            "border border-border rounded-md px-4 py-2 text-base bg-background text-foreground",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-text-contrast focus-visible:border-text-contrast",
            "placeholder:text-text-primary/50 dark:placeholder:text-text-dark/50",
            errors.name && "border-red-500"
          )}
        />
        <p
          className={cn(
            "text-sm text-red-500 min-h-[1.25rem] transition-opacity",
            errors.name ? "opacity-100" : "opacity-0"
          )}
        >
          {errors.name ? errors.name.message : " "}
        </p>
      </div>

      {/* Email */}
      <div className="flex flex-col space-y-1">
        <Input
          type="email"
          placeholder={t("emailPlaceholder")}
          {...register("email", {
            required: t("emailRequired"),
            pattern: {
              value: /^\S+@\S+$/i,
              message: t("emailInvalid"),
            },
          })}
          className={cn(
            "border border-border rounded-md px-4 py-2 text-base bg-background text-foreground",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-text-contrast focus-visible:border-text-contrast",
            "placeholder:text-text-primary/50 dark:placeholder:text-text-dark/50",
            errors.email && "border-red-500"
          )}
        />
        <p
          className={cn(
            "text-sm text-red-500 min-h-[1.25rem] transition-opacity",
            errors.email ? "opacity-100" : "opacity-0"
          )}
        >
          {errors.email ? errors.email.message : " "}
        </p>
      </div>

      {/* Mensagem */}
      <div className="flex flex-col space-y-1">
        <Textarea
          placeholder={t("messagePlaceholder")}
          {...register("message", {
            required: t("messageRequired"),
            minLength: {
              value: 10,
              message: t("messageMinLength"),
            },
          })}
          className={cn(
            "border border-border rounded-md px-4 py-2 text-base bg-background text-foreground resize-none",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-text-contrast focus-visible:border-text-contrast",
            "placeholder:text-text-primary/50 dark:placeholder:text-text-dark/50",
            errors.message && "border-red-500"
          )}
        />
        <p
          className={cn(
            "text-sm text-red-500 min-h-[1.25rem] transition-opacity",
            errors.message ? "opacity-100" : "opacity-0"
          )}
        >
          {errors.message ? errors.message.message : " "}
        </p>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "bg-text-contrast text-white font-semibold rounded-lg px-6 py-3 shadow-md transition-all duration-300 ease-in-out",
          "hover:bg-text-contrast/90 hover:shadow-lg",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        )}
      >
        {isSubmitting ? t("sending") : t("sendMessage")}
      </Button>
    </form>
  );
}
