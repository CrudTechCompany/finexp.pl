import i18n from "i18next";
import Backend from "i18next-http-backend";
import languageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "pl",
    whitelist: ["pl", "en", "ua"],
    debug: false,
    detection: {
      order: ["localStorage", "cookie"],
      cache: ["localStorage", "cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
