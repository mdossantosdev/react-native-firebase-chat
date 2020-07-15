import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton, useTheme } from 'react-native-paper';
import HomeNavigator from './HomeNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import { COLOR_WHITE_TEXT } from '../constants/Colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
      <Stack.Screen name='Settings' component={SettingsScreen} />
    </Stack.Navigator>
  );
}

function TabBarIcon(props) {
  return <IconButton size={28} style={{ marginBottom: -3 }} {...props} />;
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
      initialRouteName='Home'
      tabBarOptions={{
        activeTintColor: colors.activeTintColor,
        inactiveTintColor: colors.inactiveTintColor,
        style: { backgroundColor: colors.backgroundTabBar },
      }}
    >
      <Tab.Screen
        name='Home'
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
        name='SettingsStack'
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
