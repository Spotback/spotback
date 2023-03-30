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

const SpotExchangeDriver = () => {
  const styles = useStyles();
  const navigation = useNavigation();
  const user = useSelector((state: RootStateOrAny) => state.userReducer);
  const [imageSource, setImageSource] = useState('');
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
  const [coords, setCoords] = useState([]);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  // google maps navigation
  console.log('spotExchangeDriver User Data ', user.matchedUsersData.body);
  console.log('spotExchange current and desired location ', currentLocation, desiredLocation);

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
      // console.log('coords ', coords);
      setCoords(coords);
    } catch (error) {
      console.log('error ', error);
    }
  };

  useEffect(() => {
    getProfilePic();
    getDirections('32.946709, -96.952667', '32.951520, -96.955670');
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
              const { latitude, longitude } = event.nativeEvent;
            }}
            onRouteProgressChange={(event) => {
              // TODO: Send this info to the other user via firebase and drawn their map towards them
              const { distanceTraveled, durationRemaining, fractionTraveled, distanceRemaining } =
                event.nativeEvent;
            }}
            onError={(event) => {
              const { message } = event.nativeEvent;
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

export default SpotExchangeDriver;
