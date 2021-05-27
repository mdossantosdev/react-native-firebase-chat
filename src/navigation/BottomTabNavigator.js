import React from 'react';
import { IconButton, useTheme } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { ProfileNavigator } from './ProfileNavigator';
import { HomeNavigator } from './HomeNavigator';
import { SettingsNavigator } from './SettingsNavigator';
import { tabBarOptions } from './options';
import { Routes } from './routes';

const BottomTab = createBottomTabNavigator();

const TabBarIcon = (props) => {
  return <IconButton {...props} size={28} style={{ marginBottom: -3 }} />;
};

const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? Routes.HomeNavigator;

  if (routeName === Routes.Room) return false;
  return true;
};

export const BottomTabNavigator = () => {
  const { colors } = useTheme();

  return (
    <BottomTab.Navigator
      initialRouteName={Routes.HomeNavigator}
      tabBarOptions={tabBarOptions(colors)}
    >
      <BottomTab.Screen
        name={Routes.ProfileNavigator}
        component={ProfileNavigator}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon focused={focused} icon='account' color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name={Routes.HomeNavigator}
        component={HomeNavigator}
        options={({ route }) => ({
          tabBarLabel: 'Rooms',
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon focused={focused} icon='message-outline' color={color} />
          ),
        })}
      />
      <BottomTab.Screen
        name={Routes.SettingsNavigator}
        component={SettingsNavigator}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon focused={focused} icon='tune' color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
