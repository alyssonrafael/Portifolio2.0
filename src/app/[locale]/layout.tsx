import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { MobileProvider } from "@/contexts/MobileContext";

import "@/app/globals.css";
import { ToastProvider } from "@/components/ToastProvider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Portfólio de Alysson Rafael | Desenvolvedor Full-Stack",
  description:
    "Portfólio completo de Alysson Rafael, com projetos variados e atualizados, além de currículos e descrições detalhadas.",
  keywords: [
    "Alysson Rafael",
    "portfólio",
    "desenvolvedor",
    "front-end",
    "mobile",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind",
  ],
  authors: [{ name: "Alysson Rafael" }],
  creator: "Alysson Rafael",
  alternates: {
    canonical: "https://portifolio-alyssonrafael-2-0-ten.vercel.app/pt",
    languages: {
      "pt-BR": "https://portifolio-alyssonrafael-2-0-ten.vercel.app/pt",
      "en-US": "https://portifolio-alyssonrafael-2-0-ten.vercel.app/en",
    },
  },
  openGraph: {
    title: "Portfólio de Alysson Rafael",
    description:
      "Conheça os projetos e habilidades de Alysson Rafael como desenvolvedor front-end e mobile.",
    url: "https://portifolio-alyssonrafael-2-0-ten.vercel.app/pt",
    siteName: "Alysson Rafael Portfólio",
    locale: "pt_BR",
    type: "website",
  },
};



//layout raiz que envolve toda a aplicação
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className="bg-bg-primary dark:bg-bg-dark">
      <body
        className={`${roboto.variable} antialiased bg-white dark:bg-gray-900`}
      >
        <NextIntlClientProvider locale={locale}>
          <ThemeProvider>
            <MobileProvider>
              {children}
              <ToastProvider />
            </MobileProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
