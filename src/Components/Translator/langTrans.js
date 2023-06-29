import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInEng from '../LocalLang/en/translation.json';
import translationsInGerman from '../LocalLang/de/translation.json';
import translationsInItalian from '../LocalLang/it/translation.json';

import translationsInHindi from '../LocalLang/hd/translation.json';
import translationsInSpanish from '../LocalLang/sp/translation.json';




// console.log(i18n)
// the translations
const resources = {
  en: {
    translation: translationsInEng
  },
  de: {
    translation: translationsInGerman
  },
  it: {
    translation: translationsInItalian
  },
  hd: {
    translation: translationsInHindi
  },
  sp:{
    translation:translationsInSpanish
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources, // resources are important to load translations for the languages.
    lng: "en", // It acts as default language. When the site loads, content is shown in this language.  
    debug: true,
    fallbackLng: "de", // use de if selected language is not available
    interpolation: {
      escapeValue: false
    },
    ns: "translation", // namespaces help to divide huge translations into multiple small files.
    defaultNS: "translation"
  });

export default i18n;