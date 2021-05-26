import React from 'react';
import { TextInput } from 'react-native-paper';
import { styles } from './styles';

export const FormInput = ({ labelName, theme, ...props }) => {
  return (
    <TextInput
      {...props}
      label={labelName}
      style={styles(theme.colors).input}
      keyboardAppearance={theme.dark ? 'dark' : 'light'}
      numberOfLines={1}
    />
  );
};
