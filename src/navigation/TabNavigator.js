import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconButton } from 'react-native-paper';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      tabBarOptions={{
        activeTintColor: '#6646ee',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeNavigator}
        options={{
          title: 'Rooms',
          tabBarIcon: ({ focused, color, size }) => (
            <IconButton
              focused={focused}
              icon='message-outline'
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
