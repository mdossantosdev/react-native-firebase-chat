import React, { useContext, useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './AppNavigator';
import { AuthNavigator } from './AuthNavigator';
import { AuthContext } from '../context/AuthContext';
import { Loading } from '../components/Loading';
import { auth } from '../config/firebase';

export const RootNavigator = ({ theme }) => {
  const { user, setUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged((user) => {
      try {
        user ? setUser(user) : setUser(null);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    });

    return () => subscriber();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
