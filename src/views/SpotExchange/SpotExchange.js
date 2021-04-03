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
  
  const [spotNewsVisible, setspotNewsVisible] = useState(false);

  const toggleSpotNewsVisibility = () => setspotNewsVisible(!spotNewsVisible);

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);

  return (
    <View style={styles.mainContainer}>
    {/* @TODO: create one more header version with boolean  */}
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
            }}>
            {/* <Marker
              coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
              image={require('../../images/spotPin.png')}
            /> */}
          </MapView>
        </View>
        <View style={styles.buttonContainer}>
         {/* @TODO: create text messaging view  */}
        <Text>TEXT MESSAGING</Text>
          {/* <View style={styles.spacing}>
            <Button
              title="Find Me A Spot"
              size="large"
              onPress={() => navigation.navigate('FindMeASpot')}
            />
          </View>
          <View style={styles.spacing}>
            <Button
              title="Post My Spot"
              size="large"
              onPress={() => navigation.navigate('PostMySpot')}
            />
          </View> */}
        </View>
      </View>
      {/* <Header title="SpotNews" flip={true} onPress={toggleSpotNewsVisibility} />
      <SlidingView
        componentVisible={spotNewsVisible}
        changeVisibilityCallback={toggleSpotNewsVisibility}
        useNativeDriver={true}
        height={styles.slider.height}
        containerStyle={styles.slider}
        disableDrag={true}>
        <Header title="SpotNews" flip onPress={toggleSpotNewsVisibility} />
        <ScrollView>
          <View style={styles.sliderContainer}>
            {spotNewsItems?.map((spotNewsItem, index) => {
              return (
                <View key={spotNewsItem.id} style={styles.spotNewsContainer}>
                  <View style={styles.textContainer}>
                    <Text style={styles.text}>{spotNewsItem.title}</Text>
                  </View>
                  <Image style={styles.image} source={spotNewsItem.image} />
                </View>
              );
            })}
          </View>
        </ScrollView>
      </SlidingView> */}
    </View>
  );
};

export default SpotExchange;
