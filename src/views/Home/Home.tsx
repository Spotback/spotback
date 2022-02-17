import React, { useState, useEffect } from 'react';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { View, Text, ScrollView, Image, PermissionsAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import SlidingView from 'rn-sliding-view';
import { LogBox } from 'react-native';
import storage from '@react-native-firebase/storage';
import { Hub, Button } from '@components/index';
import { UserTypes } from '@services/users/types';
import {
  spotPin,
  spotbackLogoIcon,
  spotPin2,
  handShake,
  friends,
  pin,
  money,
  five,
} from '@assets/images/index';
import useStyles from './Home.styles';

const spotNewsItems = [
  {
    image: handShake,
    title: 'Welcome to the Spotback parking app!',
    id: 1,
  },
  {
    image: friends,
    title: 'Invite your friends and recieve a free spot',
    id: 2,
  },
  {
    image: pin,
    title: 'Pin you location after parking so we can match you before getting back in your car',
    id: 3,
  },
  {
    image: money,
    title: 'This week only make an extra dollar per spot given and save a dollar on spot taken',
    id: 4,
  },
  {
    image: five,
    title: 'Hold 10 spots this month and make an extra $5 dollars',
    id: 5,
  },
];

const Home = () => {
  const styles = useStyles();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((state: RootStateOrAny) => state.userReducer);
  const [imageSource, setImageSource] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [markerVis, setMarkerVis] = useState(false);
  const [spotNewsVisible, setspotNewsVisible] = useState(false);
  console.log(latitude, longitude);
  console.log(UserTypes.COORDINATES);
  const toggleMarker = (flag: boolean) => {
    if (flag) {
      setMarkerVis(true);
      dispatch({
        type: UserTypes.COORDINATES,
        latitude: latitude,
        longitude: longitude,
      });
    } else {
      setMarkerVis(false);
      dispatch({
        type: UserTypes.COORDINATES,
        latitude: 0,
        longitude: 0,
      });
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log('position ', position);
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
            {markerVis ? (
              <Marker coordinate={{ latitude: latitude, longitude: longitude }} image={spotPin2} />
            ) : null}
          </MapView>
        </View>
        <Hub
          title="Account"
          top
          imageSource={imageSource}
          balance={15}
          onPress={() => navigation.navigate('Account')}
        />
        <View style={styles.smallButtonContainer}>
          <View style={styles.spacing}>
            <Button
              title="Pin Spot"
              size="medium"
              icon={spotbackLogoIcon}
              customButtonStyles={styles.customTopButton}
              customTextStyles={styles.customTopText}
              onPress={() => toggleMarker(true)}
            />
          </View>
          <View style={styles.spacing}>
            <Button
              title="Remove Pin"
              size="small"
              customButtonStyles={styles.customBottomButton}
              customTextStyles={styles.customBottomText}
              onPress={() => toggleMarker(false)}
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
      <Hub title="SpotNews" bottom onPress={() => setspotNewsVisible(!spotNewsVisible)} />
      <SlidingView
        componentVisible={spotNewsVisible}
        changeVisibilityCallback={() => setspotNewsVisible(!spotNewsVisible)}
        useNativeDriver={true}
        height={styles.slider.height}
        containerStyle={styles.slider}
        disableDrag={true}>
        <Hub title="SpotNews" bottom onPress={() => setspotNewsVisible(!spotNewsVisible)} />
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
