import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, List, Text } from 'react-native-paper';
import { AuthContext } from '../context/AuthContext';
import { calcDate } from '../utils/date';

export default function ProfileScreen() {
  const { user } = useContext(AuthContext);

  const joinedDate = calcDate(Number(user.metadata.a));

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
      <View style={styles.dateContainer}>
        <Text style={styles.date}>Joined Chat App on {joinedDate}</Text>
      </View>
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
  dateContainer: {
    flex: 1,
    flexDirection: 'column-reverse',
    alignItems: 'center',
  },
  date: {
    marginBottom: 8,
    fontSize: 12,
    opacity: 0.4,
  },
});
