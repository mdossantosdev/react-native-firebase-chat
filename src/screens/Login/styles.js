import { StyleSheet } from 'react-native';
import { COLOR_WHITE_TEXT } from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    marginBottom: 10,
  },
  loginButtonLabel: {
    fontSize: 20,
    color: COLOR_WHITE_TEXT,
  },
  navButtonText: {
    fontSize: 12,
  },
});
