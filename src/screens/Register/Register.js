import React, { useState } from 'react';
import { View } from 'react-native';
import { Title, IconButton, HelperText, useTheme } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';
import { SafeAreaContainer } from '../../components/SafeAreaContainer';
import { Logo } from '../../components/Logo';
import { FormInput } from '../../components/FormInput';
import { SecureFormInput } from '../../components/SecureFormInput';
import { FormButton } from '../../components/FormButton';
import { useStatusBar } from '../../hooks/useStatusBar';
import { register } from '../../api/firebaseAuthAPI';

export const Register = ({ navigation }) => {
  useStatusBar(useTheme().dark ? 'light-content' : 'dark-content');

  const theme = useTheme();
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async (email, password) => {
    try {
      await register(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <SafeAreaContainer>
      <View style={styles.container}>
        <Logo />
        <Title style={styles.titleText}>{t('registerScreen.registerTitle')}</Title>
        <FormInput
          labelName={t('registerScreen.emailLabel')}
          value={email}
          autoCapitalize='none'
          keyboardType='email-address'
          onChangeText={(userEmail) => setEmail(userEmail)}
          theme={theme}
        />
        <SecureFormInput
          labelName={t('registerScreen.passwordLabel')}
          value={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          theme={theme}
        />
        {error &&
          <HelperText type='error' visible={error}>{error}</HelperText>
        }
        <FormButton
          title={t('registerScreen.buttonLabel')}
          modeValue='contained'
          labelStyle={styles.registerButtonLabel}
          onPress={() => handleRegister(email, password)}
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
