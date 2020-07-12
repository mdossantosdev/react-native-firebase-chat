import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { List, Switch, Divider } from 'react-native-paper';
import { ThemeContext } from '../context/ThemeContext';

export default function SettingsScreen() {
  const { toggleTheme, isDarkTheme } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <List.Item
        title='Dark Theme'
        left={(props) => <List.Icon {...props} icon='brightness-4' />}
        right={() => <Switch value={isDarkTheme} onValueChange={toggleTheme} />}
      />
      <Divider />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
