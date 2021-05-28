import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  buttonContainer: {
    width: width / 1.2,
    height: height / 15,
  },
  button: {
    marginTop: 15,
  },
});
