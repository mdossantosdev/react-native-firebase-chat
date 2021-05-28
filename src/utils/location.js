import * as Location from 'expo-location';
import { Alert } from 'react-native';

export const getLocationPermission = async () => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Permission not granted',
        'Allow the app to use location service.',
        [{ text: 'OK' }],
        { cancelable: false }
      );
      return false;
    }

    return true;
  } catch (error) {
    console.log(error);
  }
};
