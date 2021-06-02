import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {}

i18next
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources,
  })

export default i18next;
