import { spotPin2 } from '@assets/images/index';
import { Button, ErrorAlert, Input, Spinner } from '@components/index';
import Geolocation from '@react-native-community/geolocation';
import { match, setUserPositionType } from '@services/thunks';
import React, { useEffect, useState } from 'react';
import { Platform, View } from 'react-native';
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import useStyles from './FindMeASpot.styles';
import { UserSpotPosition } from '@services/types';

const FindMeASpot = () => {
  const styles = useStyles();
  const user = useSelector((state: RootStateOrAny) => state.userReducer);
  const dispatch = useDispatch();
  const [currentLocation, setCurrentLocation] = useState('');
  const [desiredLocation, setDesiredLocation] = useState('');

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
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_ALWAYS
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
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
    console.log('coordinates on submit', user.bearer, flag, currentLocation, desiredLocation);
    dispatch(match(user.bearer, currentLocation, flag ? desiredLocation : currentLocation));
    dispatch(setUserPositionType(UserSpotPosition.DRIVER));
  };

  useEffect(() => {
    requestLocationPermission();
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        {/* <Text style={styles.titleText}>Give 6 Points</Text> */}
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
      </View>
      <View style={styles.searchBoxContainer}>
        <Input
          placeholder="Enter destination"
          inputStyle="large"
          autoComplete
          onPress={(data: any, details: any) => {
            setDesiredLocation(
              `${details.geometry.location.lat
                .toString()
                .substring(0, 9)},${details.geometry.location.lng.toString().substring(0, 10)}`
            );
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
