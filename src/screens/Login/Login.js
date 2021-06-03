import React, { useState } from 'react';
import { View } from 'react-native';
import { Title, HelperText, useTheme } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';
import { SafeAreaContainer } from '../../components/SafeAreaContainer';
import { Logo } from '../../components/Logo';
import { FormInput } from '../../components/FormInput';
import { SecureFormInput } from '../../components/SecureFormInput';
import { FormButton } from '../../components/FormButton';
import { useStatusBar } from '../../hooks/useStatusBar';
import { login } from '../../api/firebaseAuthAPI';
import { Routes } from '../../navigation/routes';

export const Login = ({ navigation }) => {
  useStatusBar(useTheme().dark ? 'light-content' : 'dark-content');

  const theme = useTheme();
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (email, password) => {
    try {
      await login(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <SafeAreaContainer>
      <View style={styles.container}>
        <Logo />
        <Title style={styles.titleText}>{t('loginScreen.welcome')}</Title>
        <FormInput
          labelName={t('loginScreen.emailLabel')}
          value={email}
          autoCapitalize='none'
          keyboardType='email-address'
          onChangeText={(userEmail) => setEmail(userEmail)}
          theme={theme}
        />
        <SecureFormInput
          labelName={t('loginScreen.passwordLabel')}
          value={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          theme={theme}
        />
        {error &&
          <HelperText type='error' visible={error}>{error}</HelperText>
        }
        <FormButton
          title={t('loginScreen.buttonLabel')}
          modeValue='contained'
          labelStyle={styles.loginButtonLabel}
          onPress={() => handleLogin(email, password)}
          disabled={email.length === 0}
        />
        <FormButton
          title={t('loginScreen.newUser')}
          modeValue='text'
          uppercase={false}
          labelStyle={styles.navButtonText}
          onPress={() => navigation.navigate(Routes.Register)}
        />
      </View>
    </SafeAreaContainer>
  );
};
