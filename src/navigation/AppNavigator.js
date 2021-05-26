import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './routes';
import TabNavigator from './TabNavigator';
import { AddRoom } from '../screens/AddRoom';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator mode='modal' headerMode='none'>
      <Stack.Screen name={Routes.TabNavigator} component={TabNavigator} />
      <Stack.Screen name={Routes.AddRoom} component={AddRoom} />
    </Stack.Navigator>
  );
}
