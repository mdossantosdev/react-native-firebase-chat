import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { COLOR_PRIMARY } from '../constants/Colors';

export default function Logo() {
  return (
    <View style={styles.container}>
      <IconButton icon='message-text' color={COLOR_PRIMARY} size={80} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});
