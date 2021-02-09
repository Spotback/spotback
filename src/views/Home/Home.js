import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import Header from '../../components/Header/Header';
import profilePic from '../../images/profilePic.png';
import Button from '../../components/Button/Button';
import SpotNews from '../../components/SpotNews/SpotNews';
import styles from './Home.styles';
import handShake from '../../images/handShake.png';
import friends from '../../images/friends.png';
import pin from '../../images/pin.png';

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
      <Header title="Account" profilePic={profilePic} balance={15} onPress={() => navigation.navigate('Account')} />
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
            // commit for change
              coordinate={{latitude: 37.78825, longitude: -122.4324}}
              image={require('../../images/spotPin.png')}
            />
          </MapView>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.spacing}>
            <Button
              title="Find Me A Spot"
              size= "large"
              onPress={() => navigation.navigate('FindMeASpot')}
            />
          </View>
          <View style={styles.spacing}>
            <Button title="Post My Spot" size= "large"/>
          </View>
        </View>
      </View>
      <Header title="SpotNews" flip={true} onPress={toggleSpotNewsVisibility} />
      <SlidingView
        componentVisible={spotNewsVisible}
        changeVisibilityCallback={toggleSpotNewsVisibility}
        useNativeDriver={true}
        height={styles.slider.height}
        containerStyle={styles.slider}>
        <Header title="SpotNews" flip onPress={toggleSpotNewsVisibility} />
        <View style={styles.sliderContainer}>
          <SpotNews text="Welcome to the Spotback parking app!" image={handShake}/>
          <SpotNews text="Invite your friends and recieve a free spot" image={friends}/>
          <SpotNews text="Pin you location after parking so we can match you before getting back in your car." image={pin}/>
        </View>
      </SlidingView>
    </View>
  );
};

export default Home;
