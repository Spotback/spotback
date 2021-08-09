import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import SlidingView from 'rn-sliding-view';
import { LogBox } from 'react-native';
import spotNewsItems from '../../config/Home.config';
import Header from '../../components/Header/Header';
import profilePic from '../../images/profilePic.png';
import Button from '../../components/Button/Button';
import styles from './SpotExchange.styles';

const SpotExchange = () => {
  const navigation = useNavigation();

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);

  return (
    <View style={styles.mainContainer}>
      {/* @TODO: create one more header version with boolean to show host/client info plus cancelation options */}
      <Header
        title="Arriving in 5 min"
        profilePic={profilePic}
        balance={15}
        onPress={() => navigation.navigate('Account')}
      />
      <View style={styles.subContainer}>
        <View style={styles.mapView}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          {/* @TODO: create text messaging component  */}
          <Text>TEXT MESSAGING</Text>
        </View>
      </View>
    </View>
  );
};

export default SpotExchange;
