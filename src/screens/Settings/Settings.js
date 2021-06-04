import React, { useContext } from 'react';
import { View, Alert } from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';
import { List, Switch, Divider, Button } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';
import { ThemeContext } from '../../context/ThemeContext';
import { logout } from '../../api/firebaseAuthAPI';
import { COLOR_RED_TEXT } from '../../constants/Colors';
import { Routes } from '../../navigation/routes';

export const Settings = ({ navigation }) => {
  const { toggleTheme, isDarkTheme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const handleLogout = () => {
    Alert.alert(
      t('settingsScreen.titleModal'),
      t('settingsScreen.subtitleModal'),
      [
        {
          text: t('settingsScreen.cancel'),
          style: 'cancel',
          onPress: () => {},
        },
        {
          text: t('settingsScreen.logout'),
          style: 'destructive',
          onPress: () => logout(),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <List.Item
          title={t('settingsScreen.darkTheme')}
          left={(props) => <List.Icon {...props} icon='brightness-4' />}
          right={() => <Switch value={isDarkTheme} onValueChange={toggleTheme} />}
        />
        <Divider />
        <TouchableOpacity onPress={() => navigation.navigate(Routes.Language)}>
          <List.Item
            title={t('settingsScreen.languageLink')}
            left={(props) => <List.Icon {...props} icon='web' />}
            right={(props) => <List.Icon {...props} icon='chevron-right' />}
          />
        </TouchableOpacity>
        <Divider />
      </View>
      <Button
        mode='text'
        color={COLOR_RED_TEXT}
        uppercase={false}
        style={styles.buttonContainer}
        labelStyle={styles.labelButton}
        onPress={() => handleLogout()}
      >
        {t('settingsScreen.logout')}
      </Button>
    </View>
  );
};
