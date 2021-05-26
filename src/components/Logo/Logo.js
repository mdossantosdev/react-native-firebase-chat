import React from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { styles } from './styles';
import { COLOR_PRIMARY } from '../../constants/Colors';

export const Logo = () => {
  return (
    <View style={styles.container}>
      <IconButton icon='message-text' color={COLOR_PRIMARY} size={80} />
    </View>
  );
};
