import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import FormButton from '../components/FormButton';
import { AuthContext } from '../contexts/AuthContext';
import { logout } from '../api/firebaseAPI';

export default function HomeScreen({ navigation }) {
  const { user } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Title>Home Screen</Title>
      <Title>All chat rooms will be listed here</Title>
      <Title>{user.uid}</Title>
      <FormButton
        modeValue='contained'
        title='Logout'
        onPress={() => logout()}
      />
      <FormButton
        modeValue='contained'
        title='Add Room'
        onPress={() => navigation.navigate('AddRoom')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});
