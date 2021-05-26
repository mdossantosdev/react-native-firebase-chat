import { StyleSheet } from 'react-native';
import { COLOR_WHITE_TEXT } from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  buttonLabel: {
    fontSize: 20,
    color: COLOR_WHITE_TEXT,
  },
});
