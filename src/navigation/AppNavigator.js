import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabNavigator } from './BottomTabNavigator';
import { Routes } from './routes';
import { AddRoom } from '../screens/AddRoom';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator mode='modal' headerMode='none'>
      <Stack.Screen name={Routes.BottomTabNavigator} component={BottomTabNavigator} />
      <Stack.Screen name={Routes.AddRoom} component={AddRoom} />
    </Stack.Navigator>
  );
}
