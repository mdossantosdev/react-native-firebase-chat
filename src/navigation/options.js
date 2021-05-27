import { COLOR_WHITE_TEXT } from '../constants/Colors';

export const screenOptions = (colors) => {
  return ({
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: COLOR_WHITE_TEXT,
    headerTitleStyle: {
      fontSize: 20,
    },
  });
};

export const tabBarOptions = (colors) => {
  return({
    activeTintColor: colors.activeTintColor,
    inactiveTintColor: colors.inactiveTintColor,
    style: { backgroundColor: colors.backgroundTabBar },
  });
};
