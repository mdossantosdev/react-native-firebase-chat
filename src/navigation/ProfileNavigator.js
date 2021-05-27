import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './routes';
import { screenOptions } from './options';
import { Profile } from '../screens/Profile';

const Stack = createStackNavigator();

export const ProfileNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.Profile} screenOptions={screenOptions}>
      <Stack.Screen name={Routes.Profile} component={Profile} />
    </Stack.Navigator>
  );
};
