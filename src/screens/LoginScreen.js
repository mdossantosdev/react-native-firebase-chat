import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Title, useTheme } from 'react-native-paper';
import { useStatusBar } from '../hooks/useStatusBar';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { login } from '../api/firebaseAuthAPI';
import { COLOR_WHITE_TEXT } from '../constants/Colors';

export default function LoginScreen({ navigation }) {
  useStatusBar(useTheme().dark ? 'light-content' : 'dark-content');

  const { colors } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Title style={styles.titleText}>Welcome to Chat App</Title>
            <FormInput
              labelName='Email'
              value={email}
              autoCapitalize='none'
              keyboardType='email-address'
              onChangeText={(userEmail) => setEmail(userEmail)}
              colors={colors}
            />
            <FormInput
              labelName='Password'
              value={password}
              secureTextEntry
              onChangeText={(userPassword) => setPassword(userPassword)}
              colors={colors}
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
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
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
  loginButtonLabel: {
    fontSize: 20,
    color: COLOR_WHITE_TEXT,
  },
  navButtonText: {
    fontSize: 12,
  },
});
