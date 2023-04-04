/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { LogBox, Modal, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Coordinate } from 'react-native-maps';
import storage from '@react-native-firebase/storage';
import { useNavigation } from '@react-navigation/native';
import MapboxNavigation from '@homee/react-native-mapbox-navigation';
import database from '@react-native-firebase/database';

import { Button, Options } from '@components/index';
import { theme } from '@utils/theme';
import { coordinatesSeperator } from '@utils/coordinatesSeperator';
import { UserSpotPosition } from '@services/types';
import { useSetTransactionId } from '../../hooks/useSetTransactionId';
import {
  userPositionSelector,
  driverSelector,
  parkerSelector,
  driverCurrentLocationSelector,
  driverDesiredLocationSelector,
} from '../../services/selectors';

import HubModal from './HubModal';
import useStyles from './SpotExchangeDriver.styles';

const SpotExchangeDriver = () => {
  const styles = useStyles();
  const navigation = useNavigation();
  const userPosition = useSelector(userPositionSelector);
  const driver = useSelector(driverSelector);
  const parker = useSelector(parkerSelector);
  const matchCurrentLocation = useSelector(driverCurrentLocationSelector);
  const matchDesiredLocation = useSelector(driverDesiredLocationSelector);
  const [matchImageSource, setMatchImageSource] = useState('');
  const [userHubModalVis, setUserHubModalVis] = useState(false);
  const [cancelCompleteModalVis, setCancelCompleteModalVis] = useState({
    visible: false,
    type: 'cancelTransaction' || 'spotSwitchComplete',
  });
  const [youHaveArrivedModalVis, setYouHaveArrivedModalVis] = useState(false);
  // MabBox Coordinates
  const [currentLocation, setCurrentLocation] = useState<number[]>([]);
  const [desiredLocation, setDesiredLocation] = useState<number[]>([]);
  // MabBox Coordinate
  const transactionId = useSetTransactionId();
  const dbRealTimeInfoRef = database().ref(`driver_real_time_info/-${transactionId}/body`);
  const matchEmail = userPosition === UserSpotPosition.DRIVER ? parker.email : driver.email;

  const getMatchProfilePic = () => {
    storage()
      .ref(`users/profile_images/${matchEmail.replace('@', '_').replace('.', '_')}.png`)
      .getDownloadURL()
      .then((url: string) => {
        url ? setMatchImageSource(url) : setMatchImageSource('');
      })
      .catch((e) => {
        setMatchImageSource('');
        console.log('getting downloadURL of image error => ', e);
      });
  };

  const pushToFireBaseRealTimeUpdatesETA = (eta?) => {
    const newBody = dbRealTimeInfoRef.push();
    if (eta !== '') {
      setInterval(function () {
        newBody
          .set({
            created: Date.now(),
            eta: eta,
          })
          .then(() => console.log('ETA sent!'));
      }, 10000);
    }
  };

  const pushToFireBaseRealTimeUpdatesCoords = (latitude, longitude) => {
    const newBody = dbRealTimeInfoRef.push();
    if (latitude && longitude !== 0) {
      setInterval(function () {
        newBody
          .set({
            created: Date.now(),
            lat: latitude,
            long: longitude,
          })
          .then(() => console.log('Coords sent!'));
      }, 10000);
    }
  };

  useEffect(() => {
    getMatchProfilePic();
  }, [matchEmail]);

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    setCurrentLocation(coordinatesSeperator(matchCurrentLocation));
    setDesiredLocation(coordinatesSeperator(matchDesiredLocation));
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <View style={styles.mapView}>
          <MapboxNavigation
            origin={currentLocation as Coordinate}
            destination={desiredLocation as Coordinate}
            shouldSimulateRoute
            // showsEndOfRouteFeedback
            onLocationChange={(event) => {
              const { latitude, longitude }: any = event.nativeEvent;
              console.log('onLocationChange', latitude, longitude);
              pushToFireBaseRealTimeUpdatesCoords(latitude, longitude);
            }}
            onRouteProgressChange={(event) => {
              // TODO: Send this info to the other user via firebase and drawn their map towards them
              const {
                distanceTraveled,
                durationRemaining,
                fractionTraveled,
                distanceRemaining,
              }: any = event.nativeEvent;
              console.log(
                'onRouteProgressChange',

                durationRemaining
              );
              pushToFireBaseRealTimeUpdatesETA(durationRemaining);
            }}
            onError={(event) => {
              const { message }: any = event.nativeEvent;
            }}
            onCancelNavigation={() => {
              // User tapped the "X" cancel button in the nav UI
              // or canceled via the OS system tray on android.
              // Do whatever you need to here.
            }}
            onArrive={() => {
              // Called when you arrive at the destination.
              setYouHaveArrivedModalVis(true);
              setUserHubModalVis(true);
            }}
          />
        </View>
        {youHaveArrivedModalVis ? (
          <View style={styles.youHaveArrivedContainer}>
            <Text style={[styles.text, { fontSize: 30 }]}>You Have Arrived!</Text>
            <Text style={[styles.text, { textAlign: 'center' }]}>
              When you have successfully switched press the "Spot Switch Complete" button.
            </Text>
          </View>
        ) : null}
        {/* User hub and communication Modal */}

        {userHubModalVis ? (
          <HubModal
            closeHub={() => setUserHubModalVis(!userHubModalVis)}
            cancelPress={() => {
              setCancelCompleteModalVis({
                visible: !cancelCompleteModalVis.visible,
                type: 'cancelTransaction',
              });
              setUserHubModalVis(!userHubModalVis);
            }}
            spotSwitchCompletePress={() => {
              setCancelCompleteModalVis({
                visible: !cancelCompleteModalVis.visible,
                type: 'spotSwitchComplete',
              });
              setUserHubModalVis(!userHubModalVis);
            }}
          />
        ) : null}

        {/* Cancel or Complete Ride Modal */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={cancelCompleteModalVis.visible}
          onRequestClose={() => {
            setCancelCompleteModalVis({
              visible: !cancelCompleteModalVis.visible,
              type: 'cancelTransaction',
            });
          }}>
          <View style={styles.innerModalContainer}>
            <Options
              leftButtonColor={
                cancelCompleteModalVis.type === 'cancelTransaction'
                  ? theme.colors.error
                  : theme.colors.light
              }
              rightButtonColor={
                cancelCompleteModalVis.type === 'cancelTransaction'
                  ? theme.colors.success
                  : theme.colors.light
              }
              leftButtonTitle={
                cancelCompleteModalVis.type === 'cancelTransaction' ? 'Yes' : 'Complete'
              }
              rightButtonTitle={
                cancelCompleteModalVis.type === 'cancelTransaction' ? 'No' : 'Not Yet'
              }
              type="standard"
              onPressLeft={() => {
                setCancelCompleteModalVis({
                  visible: !cancelCompleteModalVis.visible,
                  type: 'cancelTransaction',
                }),
                  navigation.navigate('SpotExchangeComplete');
              }}
              onPressRight={() =>
                setCancelCompleteModalVis({
                  visible: !cancelCompleteModalVis.visible,
                  type: 'cancelTransaction',
                })
              }
              texts={
                cancelCompleteModalVis.type === 'cancelTransaction'
                  ? [
                      'Are you sure you want to cancel?',
                      'If you cancel during this transaction a fee may apply.',
                    ]
                  : [
                      'Spot Exchange Complete?',
                      'Please make sure that you and the other driver have switched.',
                    ]
              }
            />
          </View>
        </Modal>

        {userHubModalVis ? null : (
          <View style={styles.openCommunicationHubButton}>
            <Button
              activeOpacity={0.9}
              customButtonStyles={styles.customButtonStyles}
              size="medium"
              title="Chat with"
              matchedUserPic={matchImageSource}
              customTextStyles={styles.customTextStyles}
              backgroundColor={theme.colors.primary}
              titleColor={theme.colors.light}
              onPress={() => {
                setUserHubModalVis(!userHubModalVis);
              }}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default SpotExchangeDriver;
