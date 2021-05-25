import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Title, IconButton, useTheme } from 'react-native-paper';
import { useStatusBar } from '../hooks/useStatusBar';
import { SafeAreaContainer } from '../components/SafeAreaContainer';
import { Logo } from '../components/Logo';
import { FormInput } from '../components/FormInput';
import { FormButton } from '../components/FormButton';
import { register } from '../api/firebaseAuthAPI';
import { COLOR_WHITE_TEXT } from '../constants/Colors';

export default function RegisterScreen({ navigation }) {
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    marginBottom: 10,
  },
  registerButtonLabel: {
    fontSize: 20,
    color: COLOR_WHITE_TEXT,
  },
  navButton: {
    marginTop: 10,
  },
});
