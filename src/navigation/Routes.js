import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../contexts/AuthContext';
import { auth } from '../config/firebase';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import Loading from '../components/Loading';

export default function Routes() {
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

    return subscriber;
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
