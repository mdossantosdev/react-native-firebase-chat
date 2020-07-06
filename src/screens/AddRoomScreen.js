import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FormButton from '../components/FormButton';

export default function AddRoomScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Create a new chat room</Text>
      <FormButton
        modeValue='contained'
        title='Close Modal'
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
