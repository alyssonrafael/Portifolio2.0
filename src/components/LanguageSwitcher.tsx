"use client";

import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import Image from "next/image";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);
    return segments[0] === "pt" ? "pt" : "en";
  }, [pathname]);

  const changeLocale = (newLocale: "en" | "pt") => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return;

    segments[0] = newLocale;
    const newPath = "/" + segments.join("/");
    router.push(newPath);
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <button
        onClick={() => changeLocale("pt")}
        className={`flex items-center justify-between gap-2 transition-colors ${
          currentLocale === "pt" ? "text-text-contrast font-semibold" : ""
        }`}
      >
        Português
        <Image
          src="/flags/br.png"
          alt="Português"
          width={25}
          height={25}
          className="rounded-sm"
        />
      </button>

      <button
        onClick={() => changeLocale("en")}
        className={`flex items-center justify-between gap-2 transition-colors ${
          currentLocale === "en" ? "text-text-contrast font-semibold" : ""
        }`}
      >
        English
        <Image
          src="/flags/us.png"
          alt="English"
          width={21}
          height={21}
          className="rounded-sm"
        />
      </button>
    </div>
  );
}
