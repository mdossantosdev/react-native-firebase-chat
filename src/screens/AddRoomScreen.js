import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton, Title } from 'react-native-paper';
import { firebase } from '../config/firebase';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

export default function AddRoomScreen({ navigation }) {
  const [roomName, setRoomName] = useState('');

  const createRoom = async () => {
    try {
      await firebase.firestore().collection('THREADS').add({ name: roomName });

      navigation.navigate('Home');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.closeButtonContainer}>
        <IconButton
          icon='close-circle'
          size={36}
          color='#6646ee'
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.innerContainer}>
        <Title>Create a new chat room</Title>
        <FormInput
          labelName='Room Name'
          value={roomName}
          onChangeText={(text) => setRoomName(text)}
          clearButtonMode='while-editing'
        />
        <FormButton
          title='Create'
          modeValue='contained'
          labelStyle={styles.buttonLabel}
          onPress={roomName.length > 0 ? () => createRoom() : null}
          disabled={roomName.length === 0}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 30,
    right: 0,
    zIndex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  buttonLabel: {
    fontSize: 20,
  },
});
