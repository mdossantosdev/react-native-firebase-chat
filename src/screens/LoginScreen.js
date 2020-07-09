import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { login } from '../api/firebaseAuthAPI';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>Welcome to Chat App</Title>
      <FormInput
        labelName='Email'
        value={email}
        autoCapitalize='none'
        keyboardType='email-address'
        onChangeText={(userEmail) => setEmail(userEmail)}
      />
      <FormInput
        labelName='Password'
        value={password}
        secureTextEntry
        onChangeText={(userPassword) => setPassword(userPassword)}
      />
      <FormButton
        title='Login'
        modeValue='contained'
        labelStyle={styles.loginButtonLabel}
        onPress={() => login(email, password)}
      />
      <FormButton
        title='New user? Join here'
        modeValue='text'
        uppercase={false}
        labelStyle={styles.navButtonText}
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  titleText: {
    fontSize: 22,
    marginBottom: 10,
  },
  loginButtonLabel: {
    fontSize: 20,
  },
  navButtonText: {
    fontSize: 12,
  },
});
