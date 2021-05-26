import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton, useTheme } from 'react-native-paper';
import HomeNavigator from './HomeNavigator';
import { Routes } from './routes';
import { Profile } from '../screens/Profile';
import { Settings } from '../screens/Settings';
import { COLOR_WHITE_TEXT } from '../constants/Colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ProfileScreenStack() {
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
      <Stack.Screen name={Routes.Profile} component={Profile} />
    </Stack.Navigator>
  );
}

function SettingsScreenStack() {
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
}

function TabBarIcon(props) {
  return <IconButton {...props} size={28} style={{ marginBottom: -3 }} />;
}

export default function TabNavigator() {
  const { colors } = useTheme();

  const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

    if (routeName === 'Room') {
      return false;
    }

    return true;
  };

  return (
    <Tab.Navigator
      initialRouteName={Routes.Rooms}
      tabBarOptions={{
        activeTintColor: colors.activeTintColor,
        inactiveTintColor: colors.inactiveTintColor,
        style: { backgroundColor: colors.backgroundTabBar },
      }}
    >
      <Tab.Screen
        name={Routes.ProfileStack}
        component={ProfileScreenStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon focused={focused} icon='account' color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.Rooms}
        component={HomeNavigator}
        options={({ route }) => ({
          tabBarLabel: 'Rooms',
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon
              focused={focused}
              icon='message-outline'
              color={color}
            />
          ),
        })}
      />
      <Tab.Screen
        name={Routes.SettingsStack}
        component={SettingsScreenStack}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon focused={focused} icon='tune' color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
