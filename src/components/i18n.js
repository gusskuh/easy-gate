import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";
import translationEN from '../locales/en/Header.json';
import translationHE from '../locales/heb/Header.json';

const resources = {
  en: {
    translation: translationEN
  },
  heb: {
    translation: translationHE
  }
};

i18n
  .use(detector)
  .use(reactI18nextModule)
  .init({
    resources,
    fallbackLng: "heb",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n