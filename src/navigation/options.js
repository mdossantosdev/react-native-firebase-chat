import { useTheme } from 'react-native-paper';
import { COLOR_WHITE_TEXT } from '../constants/Colors';

export const screenOptions = () => {
  const { colors } = useTheme();

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
