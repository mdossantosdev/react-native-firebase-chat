import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton, useTheme } from 'react-native-paper';
import { Rooms } from '../screens/Rooms';
import { Room } from '../screens/Room';
import { COLOR_WHITE_TEXT } from '../constants/Colors';

const Stack = createStackNavigator();

export default function HomeNavigator() {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: COLOR_WHITE_TEXT,
        headerTitleStyle: {
          fontSize: 20,
        },
      }}
    >
      <Stack.Screen
        name='Home'
        component={Rooms}
        options={({ navigation }) => ({
          headerTitle: 'Rooms',
          headerRight: () => (
            <IconButton
              icon='message-plus'
              size={26}
              color={COLOR_WHITE_TEXT}
              onPress={() => navigation.navigate('AddRoom')}
            />
          ),
        })}
      />
      <Stack.Screen
        name='Room'
        component={Room}
        options={({ route }) => ({
          title: route.params.room.name,
          headerBackTitle: 'Back',
        })}
      />
    </Stack.Navigator>
  );
}
