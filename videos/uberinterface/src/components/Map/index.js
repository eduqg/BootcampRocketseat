import React, {useEffect, useState} from 'react';
import MapView from 'react-native-maps';
import {View, Text} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

// import { Container } from './styles';

export default function Map() {
  const [region, setRegion] = useState(null);

  useEffect(() => {
    async function getLocation() {
      await Geolocation.getCurrentPosition(info =>
        setRegion({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134,
        }),
      );
      // await navigator.geolocation.getCurrentPosition(
      //   ({coords: {latitude, longitude}}) => {
      //     setRegion({
      //       latitude,
      //       longitude,
      //       latitudeDelta: 0.0143,
      //       longitudeDelta: 0.0134,
      //     });
      //   }, // success
      //   () => {}, // error
      //   {
      //     timeout: 2000,
      //     enableHighAccuracy: true,
      //     maximumAge: 1000,
      //   },
      // );
    }

    getLocation();
  }, []);

  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        region={region}
        showsUserLocation
        loadingEnabled
      />
    </View>
  );
}
