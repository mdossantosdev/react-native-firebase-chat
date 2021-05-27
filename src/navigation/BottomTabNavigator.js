import React from 'react';
import { IconButton, useTheme } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileNavigator } from './ProfileNavigator';
import { HomeNavigator } from './HomeNavigator';
import { Routes } from './routes';
import { Settings } from '../screens/Settings';
import { COLOR_WHITE_TEXT } from '../constants/Colors';

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const SettingsScreenStack = () => {
  const { colors } = useTheme();

  const screenOptions = {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: COLOR_WHITE_TEXT,
    headerTitleStyle: {
      fontSize: 20,
    },
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={Routes.Settings} component={Settings} />
    </Stack.Navigator>
  );
};

const TabBarIcon = (props) => {
  return <IconButton {...props} size={28} style={{ marginBottom: -3 }} />;
};

export const BottomTabNavigator = () => {
  const { colors } = useTheme();

  const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

    if (routeName === Routes.Room) return false;
    return true;
  };

  return (
    <BottomTab.Navigator
      initialRouteName={Routes.HomeNavigator}
      tabBarOptions={{
        activeTintColor: colors.activeTintColor,
        inactiveTintColor: colors.inactiveTintColor,
        style: { backgroundColor: colors.backgroundTabBar },
      }}
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
        name={Routes.SettingsStack}
        component={SettingsScreenStack}
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
