import React, { createContext, useState, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18next from '../translations/i18n';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  useEffect(() => {
    if (selectedLanguage) {
      i18next.changeLanguage(selectedLanguage);
    }
  }, [selectedLanguage]);

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ selectedLanguage, handleSelectLanguage }}>
      <I18nextProvider i18n={i18next}>
        {children}
      </I18nextProvider>
    </LanguageContext.Provider>
  );
};
