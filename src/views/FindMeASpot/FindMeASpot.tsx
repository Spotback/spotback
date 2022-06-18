import React, { useState, useEffect } from 'react';
import { View, Text, PermissionsAndroid, Platform } from 'react-native';
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import { match } from '@services/thunks';
import { useNavigation } from '@react-navigation/native';
import { Button, Input, Options, Spinner, ErrorAlert } from '@components/index';
import useStyles from './FindMeASpot.styles';
import { spotPin2, evCar } from '@assets/images/index';

const FindMeASpot = () => {
  const styles = useStyles();
  const user = useSelector((state: RootStateOrAny) => state.userReducer);
  const dispatch = useDispatch();
  const [currentLocation, setCurrentLocation] = useState('');
  const [desiredLocation, setDesiredLocation] = useState('');
  console.log('coords ', currentLocation, desiredLocation);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log('position ', position);
        setCurrentLocation(`${position.coords.latitude},${position.coords.longitude}`);
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

  const onSubmit = (flag: boolean) => {
    console.log('coordiantes on submit ', user.bearer, flag, currentLocation, desiredLocation);
    dispatch(match(user.bearer, currentLocation, flag ? desiredLocation : currentLocation));
  };

  useEffect(() => {
    requestLocationPermission();
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Pay $6</Text>
      </View>
      <View style={styles.topButtonsContainer}>
        <View style={styles.spacing}>
          <Button
            title="Find Spot here"
            size="medium"
            icon={spotPin2}
            onPress={() => onSubmit(false)}
          />
        </View>

        <View style={styles.spacing}>
          <Button title="EV Spot" size="medium" icon={evCar} />
        </View>
      </View>
      <View style={styles.searchBoxContainer}>
        <Input
          placeholder="Enter destination"
          inputStyle="large"
          autoComplete
          onPress={(data: any, details: any) => {
            setDesiredLocation(`${details.geometry.location.lat},${details.geometry.location.lng}`);
          }}
        />
      </View>
      <View style={styles.bottomButtonContainer}>
        <Button title="Find Spot" size="large" onPress={() => onSubmit(true)} />
      </View>
      <Spinner />
      <ErrorAlert />
    </View>
  );
};

export default FindMeASpot;
