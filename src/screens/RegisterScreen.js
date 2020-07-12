import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Title, IconButton, useTheme } from 'react-native-paper';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { register } from '../api/firebaseAuthAPI';

export default function RegisterScreen({ navigation }) {
  const { colors } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>Register to chat</Title>
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
        title='Register'
        modeValue='contained'
        labelStyle={styles.registerButtonLabel}
        onPress={() => register(email, password)}
      />
      <IconButton
        icon='keyboard-backspace'
        size={30}
        color={colors.primary}
        style={styles.navButton}
        onPress={() => navigation.goBack()}
      />
    </View>
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
  },
  navButton: {
    marginTop: 10,
  },
});
