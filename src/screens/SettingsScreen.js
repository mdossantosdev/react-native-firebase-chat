import React, { useContext } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { List, Switch, Divider, Button } from 'react-native-paper';
import { ThemeContext } from '../context/ThemeContext';
import { logout } from '../api/firebaseAuthAPI';
import { COLOR_RED_TEXT } from '../constants/Colors';

export default function SettingsScreen() {
  const { toggleTheme, isDarkTheme } = useContext(ThemeContext);

  const handleLogout = () => {
    try {
      Alert.alert(
        'Settings',
        'Are you sure you want to log out?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Log Out',
            onPress: () => logout(),
            style: 'destructive',
          },
        ],
        { cancelable: false }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <List.Item
          title='Dark Theme'
          left={(props) => <List.Icon {...props} icon='brightness-4' />}
          right={() => (
            <Switch value={isDarkTheme} onValueChange={toggleTheme} />
          )}
        />
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  labelButton: {
    fontSize: 18,
  },
});
