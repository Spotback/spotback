import React, { useState, useEffect } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { View, Text, ScrollView, Image, PermissionsAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import SlidingView from 'rn-sliding-view';
import { LogBox } from 'react-native';
import storage from '@react-native-firebase/storage';
import spotNewsItems from '../../config/Home.config';
import { Hub, Button } from '@components/index';
import { spotPin, spotbackLogoIcon } from '@assets/images/index';
import useStyles from './Home.styles';

const Home = () => {
  const styles = useStyles();
  const navigation = useNavigation();

  const user = useSelector((state: RootStateOrAny) => state.userReducer);
  const [imageSource, setImageSource] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [spotNewsVisible, setspotNewsVisible] = useState(false);
  console.log(latitude, longitude);
  const toggleSpotNewsVisibility = () => setspotNewsVisible(!spotNewsVisible);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.log('error ', error);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      }
    );
  };

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Access Required',
          message: 'Spotback needs to Access your location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getCurrentLocation();
        console.log(granted);
      } else {
        console.log('not granted');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getProfilePic = () => {
    storage()
      .ref(`users/profile_images/${user.email.replace('@', '_').replace('.', '_')}.png`)
      .getDownloadURL()
      .then((url: string) => {
        url ? setImageSource(url) : setImageSource('');
      })
      .catch((e) => {
        setImageSource('');
        console.log('getting downloadURL of image error => ', e);
      });
  };

  useEffect(() => {
    getProfilePic();
    requestLocationPermission();
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  });

  return (
    <View style={styles.mainContainer}>
      <Hub
        title="Account"
        top
        imageSource={imageSource}
        balance={15}
        onPress={() => navigation.navigate('Account')}
      />
      <View style={styles.subContainer}>
        <View style={styles.mapView}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            <Marker coordinate={{ latitude: latitude, longitude: longitude }} image={spotPin} />
          </MapView>
        </View>
        <View style={styles.smallButtonContainer}>
          <View style={styles.spacing}>
            <Button
              title="Pin Spot"
              size="medium"
              icon={spotbackLogoIcon}
              customButtonStyles={styles.customTopButton}
              customTextStyles={styles.customTopText}
              onPress={() => navigation.navigate('FindMeASpot')}
            />
          </View>
          <View style={styles.spacing}>
            <Button
              title="Remove Pin"
              size="small"
              customButtonStyles={styles.customBottomButton}
              customTextStyles={styles.customBottomText}
              onPress={() => navigation.navigate('PostMySpot')}
            />
          </View>
        </View>
        <View style={styles.largeButtonContainer}>
          <View style={styles.spacing}>
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
          </View>
        </View>
      </View>
      <Hub title="SpotNews" bottom onPress={toggleSpotNewsVisibility} />
      <SlidingView
        componentVisible={spotNewsVisible}
        changeVisibilityCallback={toggleSpotNewsVisibility}
        useNativeDriver={true}
        height={styles.slider.height}
        containerStyle={styles.slider}
        disableDrag={true}>
        <Hub title="SpotNews" bottom onPress={toggleSpotNewsVisibility} />
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
      </SlidingView>
    </View>
  );
};

export default Home;
