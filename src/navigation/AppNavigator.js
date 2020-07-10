import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import AddRoomScreen from '../screens/AddRoomScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator mode='modal' headerMode='none'>
      <Stack.Screen name='TabNavigator' component={TabNavigator} />
      <Stack.Screen name='AddRoom' component={AddRoomScreen} />
    </Stack.Navigator>
  );
}
