import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './routes';
import { screenOptions } from './options';
import { Settings } from '../screens/Settings';

const Stack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.SettingsNavigator} screenOptions={screenOptions}>
      <Stack.Screen name={Routes.Settings} component={Settings} />
    </Stack.Navigator>
  );
};
