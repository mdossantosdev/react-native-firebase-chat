import React, { useState, useCallback, useMemo } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeContext } from '../context/ThemeContext';
import { AuthProvider } from '../context/AuthContext';
import RootNavigator from './RootNavigator';
import { CombinedDarkTheme, CombinedDefaultTheme } from '../theme';

export default function Providers() {
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
}
