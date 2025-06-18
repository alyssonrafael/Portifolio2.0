import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail, MdOutlineDownloading } from "react-icons/md";
import ContactForm from "../contato/ContactForm";
import { useLocale, useTranslations } from "next-intl";
import { ContactIconWithTooltip } from "../contato/ContactIconWithTooltip";

export default function Section5() {
  const t = useTranslations("contact");
  const locale = useLocale();

    const hrefCurriculo =
    locale === "pt"
      ? "/curriculos/curriculo-alysson-rafael-pt.pdf"
      : "/curriculos/curriculo-alysson-rafael-en.pdf";

  return (
    <section
      id="contact"
      className="py-16 md:py-24 min-h-screen flex justify-center"
    >
      <div className="mx-auto px-4 max-w-7xl w-full">
        <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center">
          {t("title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1.7fr] gap-16 items-center justify-center">
          {/* Bloco de texto e ícones */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <p className="text-2xl">{t("description")}</p>
            <div className="flex gap-6 justify-center md:justify-start">
              <ContactIconWithTooltip
                href={hrefCurriculo}
                label={t("toolTips.curriculum")}
                icon={<MdOutlineDownloading />}
                download={true}
              />
              <ContactIconWithTooltip
                href="https://github.com/alyssonrafael"
                label={t("toolTips.github")}
                icon={<SiGithub />}
              />
              <ContactIconWithTooltip
                href="https://www.linkedin.com/in/alyssonrafael/"
                label={t("toolTips.linkedIn")}
                icon={<SiLinkedin />}
              />
            </div>
          </div>

          {/* Formulário e texto convite */}
          <div className="w-full">
            {/* Texto convidativo com ícone */}
            <div className="flex items-center gap-3 mb-2 justify-center md:justify-start  text-lg font-semibold">
              <MdEmail className="text-5xl text-text-contrast" />
              <span>{t("invite")}</span>
            </div>
            <p className="text-center md:text-left">{t("invite2")}</p>
            <p className="text-center md:text-left mb-4 text-xs">
              {t("invite3")}
            </p>
            {/* formulario */}
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
