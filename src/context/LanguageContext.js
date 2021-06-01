import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ selectedLanguage, handleSelectLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
