import React from 'react';
import { useTheme } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './routes';
import { Profile } from '../screens/Profile';
import { COLOR_WHITE_TEXT } from '../constants/Colors';

const Stack = createStackNavigator();

export const ProfileNavigator = () => {
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
    <Stack.Navigator initialRouteName={Routes.Profile} screenOptions={screenOptions}>
      <Stack.Screen name={Routes.Profile} component={Profile} />
    </Stack.Navigator>
  );
};
