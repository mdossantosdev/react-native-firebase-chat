import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useTheme } from 'react-native-paper';

import { styles } from './styles';

export const Loading = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={colors.primary} />
    </View>
  );
};
