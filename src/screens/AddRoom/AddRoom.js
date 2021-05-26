import React, { useState } from 'react';
import { View } from 'react-native';
import { IconButton, Title, useTheme } from 'react-native-paper';
import { styles } from './styles';
import { SafeAreaContainer } from '../../components/SafeAreaContainer';
import { FormInput } from '../../components/FormInput';
import { FormButton } from '../../components/FormButton';
import { useStatusBar } from '../../hooks/useStatusBar';
import { createRoom } from '../../api/firestoreAPI';

export const AddRoom = ({ navigation }) => {
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
};
