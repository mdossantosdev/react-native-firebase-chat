import React, { useState } from 'react';
import { View } from 'react-native';
import { Title, IconButton, useTheme } from 'react-native-paper';
import { styles } from './styles';
import { SafeAreaContainer } from '../../components/SafeAreaContainer';
import { Logo } from '../../components/Logo';
import { FormInput } from '../../components/FormInput';
import { FormButton } from '../../components/FormButton';
import { useStatusBar } from '../../hooks/useStatusBar';
import { register } from '../../api/firebaseAuthAPI';

export const Register = ({ navigation }) => {
  useStatusBar(useTheme().dark ? 'light-content' : 'dark-content');

  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaContainer>
      <View style={styles.container}>
        <Logo />
        <Title style={styles.titleText}>Register to Chat App</Title>
        <FormInput
          labelName='Email'
          value={email}
          autoCapitalize='none'
          keyboardType='email-address'
          onChangeText={(userEmail) => setEmail(userEmail)}
          theme={theme}
        />
        <FormInput
          labelName='Password'
          value={password}
          secureTextEntry
          onChangeText={(userPassword) => setPassword(userPassword)}
          theme={theme}
        />
        <FormButton
          title='Register'
          modeValue='contained'
          labelStyle={styles.registerButtonLabel}
          onPress={() => register(email, password)}
          disabled={email.length === 0}
        />
        <IconButton
          icon='keyboard-backspace'
          size={30}
          color={theme.colors.primary}
          style={styles.navButton}
          onPress={() => navigation.goBack()}
        />
      </View>
    </SafeAreaContainer>
  );
};
