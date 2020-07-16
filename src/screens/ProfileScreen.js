import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, List } from 'react-native-paper';
import { AuthContext } from '../context/AuthContext';

export default function ProfileScreen() {
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar.Text
          size={64}
          label={user.email[0].toUpperCase()}
          style={styles.avatar}
        />
      </View>
      <List.Item
        title='Email'
        description={user.email}
        left={(props) => <List.Icon {...props} icon='email' />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    marginVertical: 20,
  },
});
