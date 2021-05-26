import React, { useState } from 'react';
import { View } from 'react-native';
import { Title, useTheme } from 'react-native-paper';
import { styles } from './styles';
import { SafeAreaContainer } from '../../components/SafeAreaContainer';
import { Logo } from '../../components/Logo';
import { FormInput } from '../../components/FormInput';
import { FormButton } from '../../components/FormButton';
import { useStatusBar } from '../../hooks/useStatusBar';
import { login } from '../../api/firebaseAuthAPI';

export const Login = ({ navigation }) => {
  useStatusBar(useTheme().dark ? 'light-content' : 'dark-content');

  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaContainer>
      <View style={styles.container}>
        <Logo />
        <Title style={styles.titleText}>Welcome to Chat App</Title>
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
          title='Login'
          modeValue='contained'
          labelStyle={styles.loginButtonLabel}
          onPress={() => login(email, password)}
          disabled={email.length === 0}
        />
        <FormButton
          title='New user? Join here'
          modeValue='text'
          uppercase={false}
          labelStyle={styles.navButtonText}
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </SafeAreaContainer>
  );
};
