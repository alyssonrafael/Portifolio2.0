import { useTranslations } from "next-intl";
import { SiGithub, SiLinkedin } from "react-icons/si";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer
      className="mt-20 border-t border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-700 dark:text-gray-300">
        <div className="text-center lg:text-left">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {t("titles.end")}
          </h3>
          <p className="text-sm leading-relaxed">{t("about")}</p>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {t("titles.links")}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#home"
                className="transition-colors duration-200 hover:text-text-contrast hover:underline"
              >
                {t("links.home")}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="transition-colors duration-200 hover:text-text-contrast hover:underline"
              >
                {t("links.about")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="transition-colors duration-200 hover:text-text-contrast hover:underline"
              >
                {t("links.contact")}
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {t("titles.contact")}
          </h3>
          <div className="flex justify-center space-x-6 text-2xl mt-4">
            <a
              href="https://www.linkedin.com/in/alyssonrafael/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="hover:text-text-contrast transition-colors duration-300"
            >
              <SiLinkedin />
            </a>
            <a
              href="https://github.com/alyssonrafael"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="hover:text-text-contrast transition-colors duration-300"
            >
              <SiGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 dark:text-gray-400 pb-6">
        © {new Date().getFullYear()} Alysson Rafael. {t("rights")}
      </div>
    </footer>
  );
}