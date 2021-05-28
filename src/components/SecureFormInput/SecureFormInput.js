import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { styles } from './styles';

export const SecureFormInput = ({ labelName, theme, ...props }) => {
  const [passwordVisible, setPasswordVisible] = useState(true);

  return (
    <TextInput
      {...props}
      label={labelName}
      style={styles(theme.colors).input}
      keyboardAppearance={theme.dark ? 'dark' : 'light'}
      numberOfLines={1}
      autoCapitalize='none'
      secureTextEntry={passwordVisible}
      right={
        <TextInput.Icon
          name={passwordVisible ? 'eye' : 'eye-off'}
          onPress={() => setPasswordVisible(!passwordVisible)}
        />
      }
    />
  );
};
