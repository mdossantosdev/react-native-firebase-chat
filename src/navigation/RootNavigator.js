import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../contexts/AuthContext';
import { auth } from '../config/firebase';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import Loading from '../components/Loading';

export default function RootNavigator({ theme }) {
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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer theme={theme}>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
