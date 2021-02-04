import React from 'react';
import {View, Text} from 'react-native';

import Header from '../../components/Header/Header';
import profilePic from '../../images/profilePic.png';
import Button from '../../components/Button/Button';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import styles from './Home.styles';

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <Header title="Account" profilePic={profilePic} balance={15} />
      <View style={styles.subContainer}>
        <Text>Map Integration</Text>
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}></MapView>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.spacing}>
            <Button title="Find Me A Spot" />
          </View>
          <View style={styles.spacing}>
            <Button title="Post My Spot" />
          </View>
        </View>
      </View>
      <Header title="SpotNews" flip={true} />
    </View>
  );
};

export default Home;
