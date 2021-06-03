import React from 'react';
import { IconButton, useTheme } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { Routes } from './routes';
import { screenOptions } from './options';
import { Rooms } from '../screens/Rooms';
import { Room } from '../screens/Room';
import { COLOR_WHITE_TEXT } from '../constants/Colors';

const Stack = createStackNavigator();

export const HomeNavigator = () => {
  const { colors } = useTheme();
  const { t } = useTranslation();

  return (
    <Stack.Navigator initialRouteName={Routes.Rooms} screenOptions={screenOptions(colors)}>
      <Stack.Screen
        name={Routes.Rooms}
        component={Rooms}
        options={({ navigation }) => ({
          headerTitle: t('screen.rooms'),
          headerRight: () => (
            <IconButton
              icon='message-plus'
              size={26}
              color={COLOR_WHITE_TEXT}
              onPress={() => navigation.navigate(Routes.AddRoom)}
            />
          ),
        })}
      />
      <Stack.Screen
        name={Routes.Room}
        component={Room}
        options={({ route }) => ({
          title: route.params.room.name,
          headerBackTitle: t('screen.back'),
        })}
      />
    </Stack.Navigator>
  );
};
