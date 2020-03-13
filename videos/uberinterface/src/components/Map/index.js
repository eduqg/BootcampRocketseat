import React, {useEffect, useState, useRef} from 'react';
import MapView from 'react-native-maps';
import {View, Text} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {getPixelSize} from '../../utils';
import Search from '../Search';
import Directions from '../Directions';

// import { Container } from './styles';

export default function Map() {
  const [region, setRegion] = useState(null);
  const [destination, setDestination] = useState(null);

  const [mapRef, setMapRef] = useState(null);

  function handleLocationSelected(data, {geometry}) {
    const {
      location: {lat: latitude, lng: longitude},
    } = geometry;

    setDestination({
      latitude,
      longitude,
      title: data.structured_formatting.main_text,
    });
  }

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
        ref={ref => setMapRef(ref)}>
        {destination && (
          <Directions
            origin={region}
            destination={destination}
            onReady={result => {
              mapRef.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  top: getPixelSize(50),
                  bottom: getPixelSize(50),
                  left: getPixelSize(50),
                  right: getPixelSize(50),
                },
              });
            }}
          />
        )}
      </MapView>
      <Search onLocationSelected={handleLocationSelected} />
    </View>
  );
}
