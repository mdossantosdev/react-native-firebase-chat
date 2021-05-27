import React from 'react';
import { useTheme } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './routes';
import { screenOptions } from './options';
import { Profile } from '../screens/Profile';

const Stack = createStackNavigator();

export const ProfileNavigator = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator initialRouteName={Routes.Profile} screenOptions={screenOptions(colors)}>
      <Stack.Screen name={Routes.Profile} component={Profile} />
    </Stack.Navigator>
  );
};
