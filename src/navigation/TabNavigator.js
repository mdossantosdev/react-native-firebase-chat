import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import HomeNavigator from './HomeNavigator';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

    if (routeName === 'Room') {
      return false;
    }

    return true;
  };

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
        options={({ route }) => ({
          title: 'Rooms',
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ focused, color, size }) => (
            <IconButton
              focused={focused}
              icon='message-outline'
              size={size}
              color={color}
            />
          ),
        })}
      />
      <Tab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused, color, size }) => (
            <IconButton
              focused={focused}
              icon='tune'
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
