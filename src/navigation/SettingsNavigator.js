import React from 'react';
import { useTheme } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './routes';
import { Settings } from '../screens/Settings';
import { COLOR_WHITE_TEXT } from '../constants/Colors';

const Stack = createStackNavigator();

export const SettingsNavigator = () => {
  const { colors } = useTheme();

  const screenOptions = {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: COLOR_WHITE_TEXT,
    headerTitleStyle: {
      fontSize: 20,
    },
  };

  return (
    <Stack.Navigator initialRouteName={Routes.SettingsNavigator} screenOptions={screenOptions}>
      <Stack.Screen name={Routes.Settings} component={Settings} />
    </Stack.Navigator>
  );
};
