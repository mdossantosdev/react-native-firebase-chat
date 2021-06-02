import { StyleSheet } from 'react-native';
import { COLOR_PRIMARY } from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 16,
  },
  selectedText: {
    fontSize: 18,
    fontWeight: '800',
    color: COLOR_PRIMARY,
  },
});
