import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import { en, es, fr } from '../locales';

const resources = {
  en: { translation: en },
  es: { translation: es},
  fr: { translation: fr },
};

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback) => {
    const locale = Localization.locale.split('-')[0];
    callback(locale);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources,
  })

export default i18next;
