import React from 'react';
import { Button } from 'react-native-paper';
import { styles } from './styles';

export const FormButton = ({ title, modeValue, ...props }) => {
  return (
    <Button
      {...props}
      mode={modeValue}
      style={styles.button}
      contentStyle={styles.buttonContainer}
      theme={{ roundness: 25 }}
    >
      {title}
    </Button>
  );
};
