import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import Header from '../../components/Header/Header';
import profilePic from '../../images/profilePic.png';
import Button from '../../components/Button/Button';
import styles from './Home.styles';

import {useNavigation} from '@react-navigation/native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import SlidingView from 'rn-sliding-view';
import {LogBox} from 'react-native';

const Home = () => {
  const [spotNewsVisible, setspotNewsVisible] = useState(false);

  const toggleSpotNewsVisibility = () => setspotNewsVisible(!spotNewsVisible);

  const navigation = useNavigation();

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Header title="Account" profilePic={profilePic} balance={15} />
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
            }}>
            <Marker
              coordinate={{latitude: 37.78825, longitude: -122.4324}}
              image={require('../../images/spotPin.png')}
            />
          </MapView>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.spacing}>
            <Button
              title="Find Me A Spot"
              onPress={() => navigation.navigate('FindMeASpot')}
            />
          </View>
          <View style={styles.spacing}>
            <Button title="Post My Spot" />
          </View>
        </View>
      </View>
      <Header title="SpotNews" flip={true} onPress={toggleSpotNewsVisibility} />
      <SlidingView
        componentVisible={spotNewsVisible}
        changeVisibilityCallback={toggleSpotNewsVisibility}
        useNativeDriver={true}
      >
        <View style={styles.slider}>
        <Header title="SpotNews" flip onPress={toggleSpotNewsVisibility} />
          <Text>Welcome to the Spotback parking app!</Text>
          <Text>Invite your friends and recieve a free spot.</Text>
          <Text>Pin you location after parking so we can match you before getting back in your car.</Text>
        </View>
      </SlidingView>
    </View>
  );
};

export default Home;
