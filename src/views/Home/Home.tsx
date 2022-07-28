import { friends, handShake, pin, spotbackLogoIcon, spotPin2 } from '@assets/images/index';
import { Button, Hub } from '@components/index';
import Geolocation from '@react-native-community/geolocation';
import storage from '@react-native-firebase/storage';
import { useNavigation } from '@react-navigation/native';
import { pinnedCoordinates } from '@services/thunks';
import React, { useEffect, useState } from 'react';
import { Image, LogBox, Platform, ScrollView, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import SlidingView from 'rn-sliding-view';
import useStyles from './Home.styles';

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
  const [profileComplete, setProfileComplete] = useState(false);

  console.log(latitude, longitude);
  const toggleMarker = (flag: boolean) => {
    if (flag) {
      setMarkerVis(flag);
      dispatch(pinnedCoordinates(`${latitude},${longitude}`));
    } else {
      setMarkerVis(flag);
      dispatch(pinnedCoordinates(''));
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
    const granted = await request(
      Platform.select({
        ios: PERMISSIONS.IOS.LOCATION_ALWAYS,
        android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      }),
      {
        title: 'Location Access Required',
        message: 'Spotback needs to Access your location',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      }
    );
    if (granted === RESULTS.GRANTED) {
      console.log(granted);
      getCurrentLocation();
    } else {
      console.log('not granted');
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
    Object.values(user.car).map((item) => {
      item === '' || item === undefined ? setProfileComplete(false) : setProfileComplete(true);
    });
    // @TODO: might have to setIntervals for fetching user coordinates every second or 2
    // Could also be done every 5 5o 10 seconds to update the map as the user is moving
    // or get the latest coordinates when clicking post my spot and double check pinnedcoordinates is empty
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  });

  const spotNewsItems = [
    {
      image: handShake,
      title: 'Welcome to the Spotback parking app!',
      id: 1,
    },
    {
      image: friends,
      title: 'Invite your friends to the Spotback Beta under Invite a Friend.',
      id: 2,
    },
    {
      image: pin,
      title: 'Pin you location after parking so we can match you before getting back in your car',
      id: 3,
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <View style={styles.mapView}>
          <MapView
            provider={Platform.OS === 'ios' ? null : PROVIDER_GOOGLE}
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

        {profileComplete ? (
          <View style={styles.largeButtonContainer}>
            <View style={styles.spacing}>
              <Button
                title="Find Me A Spot"
                size="large"
                onPress={() =>
                  navigation.navigate('FindMeASpot', { coordinates: `${latitude},${longitude}` })
                }
              />
            </View>
            <View style={styles.spacing}>
              <Button
                title="Post My Spot"
                size="large"
                onPress={() =>
                  navigation.navigate('PostMySpot', { coordinates: `${latitude},${longitude}` })
                }
              />
            </View>
          </View>
        ) : (
          <View style={styles.completeButtonContainer}>
            <View style={styles.spacing}>
              <Button
                title="Complete Profile"
                size="large"
                onPress={() => navigation.navigate('EditProfile')}
              />
            </View>
          </View>
        )}
      </View>

      <Hub title="SpotNews" bottom onPress={() => setspotNewsVisible(!spotNewsVisible)} />
      <SlidingView
        componentVisible={spotNewsVisible}
        changeVisibilityCallback={() => setspotNewsVisible(!spotNewsVisible)}
        useNativeDriver={true}
        height={styles.slider.height}
        containerStyle={styles.slider}>
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
