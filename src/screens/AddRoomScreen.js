import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton, Title, useTheme } from 'react-native-paper';
import { SafeAreaContainer } from '../components/SafeAreaContainer';
import { FormInput } from '../components/FormInput';
import { FormButton } from '../components/FormButton';
import { createRoom } from '../api/firestoreAPI';
import { useStatusBar } from '../hooks/useStatusBar';
import { COLOR_WHITE_TEXT } from '../constants/Colors';

export default function AddRoomScreen({ navigation }) {
  useStatusBar(useTheme().dark ? 'light-content' : 'dark-content');

  const theme = useTheme();
  const [roomName, setRoomName] = useState('');

  const handlePress = () => {
    if (roomName.length > 0) {
      createRoom(roomName);
      navigation.navigate('Home');
    }
  };

  return (
    <SafeAreaContainer>
      <View style={styles.container}>
        <View style={styles.closeButtonContainer}>
          <IconButton
            icon='close-circle'
            size={36}
            color={theme.colors.primary}
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
            theme={theme}
          />
          <FormButton
            title='Create'
            modeValue='contained'
            labelStyle={styles.buttonLabel}
            onPress={handlePress}
            disabled={roomName.length === 0}
          />
        </View>
      </View>
    </SafeAreaContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 0,
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
    color: COLOR_WHITE_TEXT,
  },
});
