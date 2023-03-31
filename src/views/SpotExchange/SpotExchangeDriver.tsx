/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable react/no-unescaped-entities */
import { Button, Options } from '@components/index';
import { GOOGLE_API_KEY } from '@env';
import Polyline from '@mapbox/polyline';
import storage from '@react-native-firebase/storage';
import { useNavigation } from '@react-navigation/native';
import { theme } from '@utils/theme';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { LogBox, Modal, Text, View } from 'react-native';
import { RootStateOrAny, useSelector } from 'react-redux';
import useStyles from './SpotExchangeDriver.styles';
import MapboxNavigation from '@homee/react-native-mapbox-navigation';
import { coordinatesSeperator } from '@utils/coordinatesSeperator';
import { Coordinate } from 'react-native-maps';
import HubModal from './HubModal';
import database from '@react-native-firebase/database';
import { useSetTransactionId } from '../../hooks/useSetTransactionId';

const SpotExchangeDriver = () => {
  const styles = useStyles();
  const navigation = useNavigation();
  const user = useSelector((state: RootStateOrAny) => state.userReducer);
  const matchedUser = useSelector(
    (state: RootStateOrAny) => state.userReducer.transactionIdInfo.matchEmail
  );
  const [matchImageSource, setMatchImageSource] = useState('');
  const [userHubModalVis, setuserHubModalVis] = useState(false);
  const [cancelCompleteModalVis, setCancelCompleteModalVis] = useState({
    visible: false,
    type: 'cancelTransaction' || 'spotSwitchComplete',
  });
  const [youHaveArrivedModalVis, setYouHaveArrivedModalVis] = useState(false);
  // MabBox Coordinates
  const [currentLocation, setCurrentlocation] = useState<number[]>([]);
  const [desiredLocation, setDesiredLocation] = useState<number[]>([]);
  // MabBox Coordinate

  // google maps navigation
  const transactionId = useSetTransactionId();
  const dbRealTimeInfoRef = database().ref(`driver_real_time_info/-${transactionId}/body`);
  // google maps navigation
  console.log('spotExchangeDriver User Data ', user.matchedUsersData.body);
  console.log('spotExchange current and desired location ', currentLocation, desiredLocation);

  const getMatchProfilePic = () => {
    storage()
      .ref(`users/profile_images/${matchedUser.replace('@', '_').replace('.', '_')}.png`)
      .getDownloadURL()
      .then((url: string) => {
        url ? setMatchImageSource(url) : setMatchImageSource('');
      })
      .catch((e) => {
        setMatchImageSource('');
        console.log('getting downloadURL of image error => ', e);
      });
  };

  const pushtofireBaseRealTimeUpdatesETA = (eta?) => {
    const newBody = dbRealTimeInfoRef.push();
    if (eta !== '') {
      setInterval(function () {
        newBody
          .set({
            created: Date.now(),
            eta: eta,
          })
          .then(() => console.log('Message sent!'));
      }, 10000);
    }
  };

  const pushtofireBaseRealTimeUpdatesCoords = (latitude, longitude) => {
    const newBody = dbRealTimeInfoRef.push();
    if (latitude && longitude !== 0) {
      setInterval(function () {
        newBody
          .set({
            created: Date.now(),
            lat: latitude,
            long: longitude,
          })
          .then(() => console.log('Message sent!'));
      }, 10000);
    }
  };

  useEffect(() => {
    getMatchProfilePic();
  }, []);

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    setCurrentlocation(coordinatesSeperator(user.matchedUsersData.body.currentLocation));
    setDesiredLocation(coordinatesSeperator(user.matchedUsersData.body.desiredLocation));
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
              pushtofireBaseRealTimeUpdatesCoords(latitude, longitude);
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
              pushtofireBaseRealTimeUpdatesETA(durationRemaining);
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
              setuserHubModalVis(true);
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
            closeHub={() => setuserHubModalVis(!userHubModalVis)}
            cancelPress={() => {
              setCancelCompleteModalVis({
                visible: !cancelCompleteModalVis.visible,
                type: 'cancelTransaction',
              });
              setuserHubModalVis(!userHubModalVis);
            }}
            spotSwitchCompletePress={() => {
              setCancelCompleteModalVis({
                visible: !cancelCompleteModalVis.visible,
                type: 'spotSwitchComplete',
              });
              setuserHubModalVis(!userHubModalVis);
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
          <View style={styles.openCommumnicationHubButton}>
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
                setuserHubModalVis(!userHubModalVis);
              }}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default SpotExchangeDriver;
