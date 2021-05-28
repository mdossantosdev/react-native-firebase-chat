import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const styles = (colors) => (
  StyleSheet.create({
    input: {
      width: width / 1.2,
      height: height / 15,
      marginVertical: 10,
      backgroundColor: colors.inputBackground,
    },
  })
);
