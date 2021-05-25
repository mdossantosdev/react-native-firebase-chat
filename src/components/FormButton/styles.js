import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  buttonContainer: {
    width: width / 2,
    height: height / 16,
  },
  button: {
    marginTop: 10,
  },
});
