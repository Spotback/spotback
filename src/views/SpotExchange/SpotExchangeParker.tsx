/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable react/no-unescaped-entities */
import { driverCar, spotPinGold } from '@assets/images/index';
import { Button, Hub, Options, Stars } from '@components/index';
import { GOOGLE_API_KEY } from '@env';
import Polyline from '@mapbox/polyline';
import storage from '@react-native-firebase/storage';
import { useNavigation } from '@react-navigation/native';
import { theme } from '@utils/theme';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, Linking, LogBox, Modal, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker, Polyline as GooglePolyline, PROVIDER_GOOGLE } from 'react-native-maps';
import { RootStateOrAny, useSelector } from 'react-redux';
import HubModal from './HubModal';
import useStyles from './SpotExchangeParker.styles';
import database from '@react-native-firebase/database';
import { useSetTransactionId } from '../../hooks/useSetTransactionId';
import usePoll from 'react-use-poll';

const SpotExchangeParker = () => {
  const styles = useStyles();
  const navigation = useNavigation();
  const user = useSelector((state: RootStateOrAny) => state.userReducer);
  console.log('spotExchangeParker User Data ', user);
  const [modalVis, setModalVis] = useState(false);
  const [hubVis, setHubVis] = useState(false);
  const [imageSource, setImageSource] = useState('');

  const [cancelCompleteModalVis, setCancelCompleteModalVis] = useState({
    visible: false,
    type: 'cancelTransaction' || 'spotSwitchComplete',
  });
  const [userHubModalVis, setuserHubModalVis] = useState(false);

  // google maps navigation
  const transactionId = useSetTransactionId();
  const dbRealTimeInfoRef = database().ref(`driver_real_time_info/-${transactionId}/body`);
  const [coords, setCoords] = useState([]);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  // google maps navigation

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);

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

  const retrievefireBaseRealTimeUpdates = () => {
    dbRealTimeInfoRef.orderByChild('created').on('value', (body) => {
      console.log('firebase coordinates retrieved by Parker ', body);
    });
  };

  usePoll(
    async () => {
      retrievefireBaseRealTimeUpdates();
      getDirections('32.946709, -96.952667', '32.951520, -96.955670');
    },
    [],
    {
      interval: 11000,
    }
  );

  useEffect(() => {
    getProfilePic();
    getDirections('32.946709, -96.952667', '32.951520, -96.955670');
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <View style={styles.mapView}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: 32.946709,
              longitude: -96.952667,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            <Marker
              coordinate={{ latitude: 32.95152, longitude: -96.95567 }}
              title={'Your Location'}>
              <Image style={{ width: 40, height: 40 }} source={driverCar} />
            </Marker>
            <Marker
              coordinate={{ latitude: 32.946709, longitude: -96.952667 }}
              title={'Driver Location'}>
              <Image source={spotPinGold} />
            </Marker>

            <GooglePolyline coordinates={coords} strokeWidth={5} strokeColor="#6865FF" />
          </MapView>
        </View>
        <Hub
          title={`Arriving in ${user.matchedUsersData.match.etaFromSpot.value} Minutes`}
          client
          imageSource={imageSource}
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
                    <Text style={styles.modalText}>Walter White</Text>
                    <Text style={styles.modalText}>BMW, 3 Series, Black</Text>
                    <Text style={styles.modalText}>FF35DG2</Text>
                  </View>
                  <View style={styles.starContainer}>
                    <Stars starSize={20} starWidth={3} rating={user.rating} />
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

        {userHubModalVis ? null : (
          <View style={styles.openCommumnicationHubButton}>
            <Button
              activeOpacity={0.9}
              customButtonStyles={styles.customButtonStyles}
              size="medium"
              title="Chat with User"
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

export default SpotExchangeParker;
