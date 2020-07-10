import React from 'react';
import { StyleSheet, View } from 'react-native';
import { List, Switch, Divider } from 'react-native-paper';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <List.Item
        title='Dark theme'
        left={(props) => <List.Icon {...props} icon='brightness-4' />}
        right={() => <Switch value={true} />}
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
