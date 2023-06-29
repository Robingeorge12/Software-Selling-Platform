import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// const apiKey = "eCHU7hYzrN-mJsgQ2v-HDA";
// const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",

    ns: ["default"],
    defaultNS: "default",

    supportedLngs: ["en","zh","hi","ko","fr","es","de","ja"],
    
    backend: {
      loadPath: loadPath
    }
  })


// import { i18n } from 'i18next';

// Call this method when new data is added
// function updateTranslations() {
//   i18n.reloadResources();
// }

// {   

// i18next
//   .use(HttpBackend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: "en",

//     ns: ["default"],
//     defaultNS: "default",

//     supportedLngs: ["en","zh","hi","ko","fr","es","de","ja"],
    
//     backend: {
//       loadPath: loadPath
//     }
//   })

// }