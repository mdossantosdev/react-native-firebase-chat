import React from 'react';
import { IconButton, useTheme } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './routes';
import { Rooms } from '../screens/Rooms';
import { Room } from '../screens/Room';
import { COLOR_WHITE_TEXT } from '../constants/Colors';

const Stack = createStackNavigator();

export const HomeNavigator = () => {
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
    <Stack.Navigator
      initialRouteName={Routes.Rooms}
      screenOptions={screenOptions}
    >
      <Stack.Screen
        name={Routes.Rooms}
        component={Rooms}
        options={({ navigation }) => ({
          headerTitle: 'Rooms',
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
          headerBackTitle: 'Back',
        })}
      />
    </Stack.Navigator>
  );
};
