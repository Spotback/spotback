/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { Image, LogBox, Modal, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import axios from 'axios';
import MapView, { Marker, Polyline as GooglePolyline, PROVIDER_GOOGLE } from 'react-native-maps';
import Polyline from '@mapbox/polyline';
import storage from '@react-native-firebase/storage';
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';
import usePoll from 'react-use-poll';

import { driverCar, spotPinGold } from '@assets/images/index';
import { Button, Hub, Options, Stars } from '@components/index';
import { GOOGLE_API_KEY } from '@env';
import { theme } from '@utils/theme';
import { UserSpotPosition } from '@services/types';
import {
  userPositionSelector,
  driverSelector,
  parkerSelector,
  driverCurrentLocationSelector,
  driverDesiredLocationSelector,
  userRatingSelector,
  etaInMinutesSelector,
  transactionIdSelector
} from '../../services/selectors';

import HubModal from './HubModal';
import useStyles from './SpotExchangeParker.styles';

const SpotExchangeParker = () => {
  const styles = useStyles();
  const navigation = useNavigation();
  const userPosition = useSelector(userPositionSelector);
  const driver = useSelector(driverSelector);
  const parker = useSelector(parkerSelector);
  const currentLocation = useSelector(driverCurrentLocationSelector);
  const desiredLocation = useSelector(driverDesiredLocationSelector);
  const userRating = useSelector(userRatingSelector);
  const etaInMinutes = useSelector(etaInMinutesSelector);
  const transactionId = useSelector(transactionIdSelector);

  const currentLocationArray = currentLocation.trim().split(',');
  const desiredLocationArray = desiredLocation.trim().split(',');

  const [modalVis, setModalVis] = useState(false);
  const [hubVis, setHubVis] = useState(false);
  const [matchImageSource, setMatchImageSource] = useState('');
  const [cancelCompleteModalVis, setCancelCompleteModalVis] = useState({
    visible: false,
    type: 'cancelTransaction' || 'spotSwitchComplete',
  });
  const [userHubModalVis, setUserHubModalVis] = useState(false);
  const [coords, setCoords] = useState([]);
  const [latitude, setLatitude] = useState(parseFloat(currentLocationArray[0]));
  const [longitude, setLongitude] = useState(parseFloat(currentLocationArray[1]));
  const [eta, setEta] = useState(etaInMinutes);

  const matchEmail = userPosition === UserSpotPosition.DRIVER ? parker.email : driver.email;
  const dbRealTimeCoordsRef = database().ref(`driver_real_time_coords/-${transactionId}/body`);
  const dbRealTimeETARef = database().ref(`driver_real_time_eta/-${transactionId}/body`);

  const matchCarInfo =
    userPosition === UserSpotPosition.DRIVER
      ? `${parker.car.make}, ${parker.car.model}, ${parker.car.color}`
      : `${driver.car.make}, ${driver.car.model}, ${driver.car.color}`;
  const matchLicensePlate =
    userPosition === UserSpotPosition.DRIVER
      ? `${parker.car.licencePlate.toUpperCase()}`
      : `${driver.car.licencePlate.toUpperCase()}`;

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);

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

  const getDirections = async (startLoc, destinationLoc) => {
    try {
      const respJson = await axios.get(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=${GOOGLE_API_KEY}`
      );
      const points = Polyline.decode(respJson.data.routes[0].overview_polyline.points);
      const coords = points.map((point, index) => {
        return {
          latitude: point[0],
          longitude: point[1],
        };
      });
      console.log('coords ', coords);
      setCoords(coords);
    } catch (error) {
      console.log('error ', error);
    }
  };

  const retrieveFireBaseRealTimeUpdates = () => {
    dbRealTimeCoordsRef
      .orderByChild('created')
      .limitToLast(1)
      .on('child_added', (body) => {
        const lastCoordsObj = body.val();
        if (lastCoordsObj.lat !== undefined && lastCoordsObj.long !== undefined) {
          setLatitude(lastCoordsObj.lat);
          setLongitude(lastCoordsObj.long);
        }
      });

    dbRealTimeETARef
      .orderByChild('created')
      .limitToLast(1)
      .on('child_added', (body) => {
        const etaObj = body.val();
        if (etaObj.eta !== undefined) {
          const eta = etaObj.eta;
          setEta(Math.round(eta / 60));
        }
      });
  };

  usePoll(
    async () => {
      retrieveFireBaseRealTimeUpdates();
      getDirections(currentLocation, desiredLocation);
    },
    [],
    {
      interval: 10000,
    }
  );

  useEffect(() => {
    getMatchProfilePic();
    console.log('rerender rerender ahahahahah');
  }, [matchEmail]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <View style={styles.mapView}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: currentLocationArray[0],
              longitude: currentLocationArray[1],
              latitudeDelta: 0.0035,
              longitudeDelta: 0.0035,
            }}>
            <Marker coordinate={{ latitude, longitude }} title={'Driver Location'}>
              <Image style={{ width: 40, height: 40 }} source={driverCar} />
            </Marker>
            <Marker
              coordinate={{ latitude: desiredLocationArray[0], longitude: desiredLocationArray[1] }}
              title={'Your Location'}>
              <Image source={spotPinGold} />
            </Marker>

            <GooglePolyline coordinates={coords} strokeWidth={5} strokeColor="#6865FF" />
          </MapView>
        </View>
        <Hub
          title={eta < 1 ? `Arriving in < Minute` : `Arriving in ${eta} Minutes`}
          client
          // imageSource={imageSource}
          balance={15}
          onPress={() => {
            // setHubVis(!hubVis);
            // setModalVis(!modalVis);
          }}
          // hide={hubVis}
        />
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVis}
          onRequestClose={() => {
            setModalVis(!modalVis);
            setHubVis(!hubVis);
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.centeredView}>
              <TouchableOpacity
                onPress={() => {
                  setModalVis(!modalVis);
                  setHubVis(!hubVis);
                }}>
                <View style={styles.modalView}>
                  <View style={styles.modalTextContainer}>
                    <Text style={styles.modalText}>{matchEmail}</Text>
                    <Text style={styles.modalText}>{matchCarInfo}</Text>
                    <Text style={styles.modalText}>{matchLicensePlate}</Text>
                  </View>
                  <View style={styles.starContainer}>
                    <Stars starSize={20} starWidth={3} rating={userRating} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.cancelTransaction}>
              <Button
                size="small"
                title="Cancel Transaction"
                backgroundColor={theme.colors.light}
                titleColor={theme.colors.error}
                onPress={() => {
                  setModalVis(!modalVis);
                  setHubVis(!hubVis);
                  setCancelCompleteModalVis({
                    visible: !cancelCompleteModalVis.visible,
                    type: 'cancelTransaction',
                  });
                }}
              />
            </View>
          </View>
        </Modal>
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

export default SpotExchangeParker;
