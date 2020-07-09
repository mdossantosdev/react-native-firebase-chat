import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigator from './HomeNavigator';
import AddRoomScreen from '../screens/AddRoomScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator mode='modal' headerMode='none'>
      <Stack.Screen name='HomeNavigator' component={HomeNavigator} />
      <Stack.Screen name='AddRoom' component={AddRoomScreen} />
    </Stack.Navigator>
  );
}
