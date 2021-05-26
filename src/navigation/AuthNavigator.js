import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './routes';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator headerMode='none' initialRouteName={Routes.Login}>
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Register} component={Register} />
    </Stack.Navigator>
  );
}
