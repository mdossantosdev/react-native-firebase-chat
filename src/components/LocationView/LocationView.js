import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';

export const LocationView = ({ location }) => {
  const LATITUDE_DELTA = 0.01;
  const LONGITUDE_DELTA = 0.02;

  return (
    <TouchableOpacity style={styles.container}>
      <MapView
        style={styles.mapView}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        scrollEnabled={false}
        zoomEnabled={false}
      >
        <Marker
          coordinate={{ latitude : location.latitude , longitude : location.longitude }}
        />
      </MapView>
    </TouchableOpacity>
  );
};
