import React, { useState, useCallback, useMemo } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeContext } from './ThemeContext';
import { AuthProvider } from './AuthContext';
import { RootNavigator } from '../navigation/RootNavigator';
import { CombinedDarkTheme, CombinedDefaultTheme } from '../theme';

export const AppProviders = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  let theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = useCallback(() => {
    return setIsDarkTheme(!isDarkTheme);
  }, [isDarkTheme]);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isDarkTheme,
    }),
    [toggleTheme, isDarkTheme]
  );

  return (
    <ThemeContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <AuthProvider>
          <RootNavigator theme={theme} />
        </AuthProvider>
      </PaperProvider>
    </ThemeContext.Provider>
  );
};
