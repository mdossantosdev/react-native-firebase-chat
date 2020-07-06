import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChatApp from './ChatAppStack';
import AddRoomScreen from '../screens/AddRoomScreen';

const ModalStack = createStackNavigator();

export default function AppStack() {
  return (
    <ModalStack.Navigator mode='modal' headerMode='none'>
      <ModalStack.Screen name='ChatApp' component={ChatApp} />
      <ModalStack.Screen name='AddRoom' component={AddRoomScreen} />
    </ModalStack.Navigator>
  );
}
