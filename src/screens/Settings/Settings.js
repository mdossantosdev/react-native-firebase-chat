import React, { useContext } from 'react';
import { View, Alert } from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';
import { List, Switch, Divider, Button } from 'react-native-paper';
import { styles } from './styles';
import { ThemeContext } from '../../context/ThemeContext';
import { logout } from '../../api/firebaseAuthAPI';
import { COLOR_RED_TEXT } from '../../constants/Colors';

export const Settings = () => {
  const { toggleTheme, isDarkTheme } = useContext(ThemeContext);

  const handleLogout = () => {
    Alert.alert(
      'Settings',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => {},
        },
        {
          text: 'Log out',
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
          title='Dark Theme'
          left={(props) => <List.Icon {...props} icon='brightness-4' />}
          right={() => <Switch value={isDarkTheme} onValueChange={toggleTheme} />}
        />
        <Divider />
        <TouchableOpacity onPress={() => {}}>
          <List.Item
            title='Language'
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
        Log out
      </Button>
    </View>
  );
};
