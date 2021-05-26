import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import { AddRoom } from '../screens/AddRoom';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator mode='modal' headerMode='none'>
      <Stack.Screen name='TabNavigator' component={TabNavigator} />
      <Stack.Screen name='AddRoom' component={AddRoom} />
    </Stack.Navigator>
  );
}
