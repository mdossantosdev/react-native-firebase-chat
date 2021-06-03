import React from 'react';
import { useTheme } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { Routes } from './routes';
import { screenOptions } from './options';
import { Settings } from '../screens/Settings';
import { Language } from '../screens/Language';

const Stack = createStackNavigator();

export const SettingsNavigator = () => {
  const { colors } = useTheme();
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      initialRouteName={Routes.SettingsNavigator}
      screenOptions={screenOptions(colors)}
    >
      <Stack.Screen
        name={Routes.Settings}
        component={Settings}
        options={{
          headerTitle: t('screen.settings'),
        }}
      />
      <Stack.Screen
        name={Routes.Language}
        component={Language}
        options={{
          headerTitle: t('screen.language'),
        }}
      />
    </Stack.Navigator>
  );
};
