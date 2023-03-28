/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable react/no-unescaped-entities */
import { driverCar, phone, sendMessage, spotPinGold, exit } from '@assets/images/index';
import { Button, Hub, Options, Stars } from '@components/index';
import { GOOGLE_API_KEY } from '@env';
import Polyline from '@mapbox/polyline';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import { useNavigation } from '@react-navigation/native';
import { UserSpotPosition } from '@services/types';
import { makeCall } from '@utils/makeCall';
import { theme } from '@utils/theme';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Image,
  Linking,
  LogBox,
  Modal,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { RootStateOrAny, useSelector } from 'react-redux';
import useStyles from './SpotExchange.styles';
import MapboxNavigation from '@homee/react-native-mapbox-navigation';
import { coordinatesSeperator } from '@utils/coordinatesSeperator';
import { Coordinate } from 'react-native-maps';

const SpotExchange = () => {
  const styles = useStyles();

  const navigation = useNavigation();
  const user = useSelector((state: RootStateOrAny) => state.userReducer);
  const transactionId = useSelector((state: RootStateOrAny) => state.userReducer.transactionId);

  const [imageSource, setImageSource] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState({});
  const [userHubModalVis, setuserHubModalVis] = useState(false);
  const [cancelCompleteModalVis, setcancelCompleteModalVis] = useState({
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
  console.log('spotExchange User Data ', user.matchedUsersData.body);
  console.log('spotExchange current and desired location ', currentLocation, desiredLocation);
  const dbChatRoomRef = database().ref(`chat_rooms/-${transactionId}/messages`);

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

  const retrieveTransactionChatRoomMessages = () => {
    dbChatRoomRef.orderByChild('created').on('value', (messages) => {
      setMessages(messages.val());
    });
  };

  const pushTransactionChatRoomMessage = (messageFromButton) => {
    const newMessage = dbChatRoomRef.push();
    newMessage
      .set({
        created: Date.now(),
        sender_id: user.email,
        text: message === '' ? messageFromButton : message,
      })
      .then(() => console.log('Message sent!'));
    setMessage('');
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

  const displayMessages = () => {
    return messages !== null
      ? Object.values(messages)
          .sort((a: any, b: any) => b.created - a.created)
          .map((item: any, index: number) => {
            return (
              <View
                key={index}
                style={
                  item.sender_id === user.email ? styles.incomingTextRight : styles.incomingTextLeft
                }>
                <Text style={styles.incomingTextMsg}>{item.text}</Text>
              </View>
            );
          })
      : null;
  };

  const makeCall = () => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${16508881712}';
    } else {
      phoneNumber = 'telprompt:${16508881712}';
    }
    Linking.openURL(phoneNumber);
  };

  useEffect(() => {
    getProfilePic();
    getDirections('32.946709, -96.952667', '32.951520, -96.955670');
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    setCurrentlocation(coordinatesSeperator(user.matchedUsersData.body.currentLocation));
    setDesiredLocation(coordinatesSeperator(user.matchedUsersData.body.desiredLocation));
  }, []);

  useEffect(() => {
    retrieveTransactionChatRoomMessages();
  }, [message]);

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
              When you have succsesfully switched press the "Spot Switch Complete" button.
            </Text>
          </View>
        ) : null}
        {/* User hub and communication Modal */}
        {userHubModalVis ? (
          <View style={styles.mainCommunicationsHub}>
            <TouchableOpacity
              style={styles.communicationHubCloseX}
              onPress={() => setuserHubModalVis(false)}>
              <Image style={styles.xImage} source={exit} />
            </TouchableOpacity>
            <Text style={styles.text}>Walter White</Text>
            <Text style={styles.text}>BMW, 3 Series, Black</Text>
            <Text style={styles.text}>FF35DG2</Text>
            <View style={styles.starContainer}>
              <Stars starSize={20} starWidth={3} rating={user.rating} />
            </View>

            <View style={styles.transactionsButtonContainer}>
              <Button
                size="small"
                title="Cancel Transaction"
                backgroundColor={theme.colors.light}
                titleColor={theme.colors.error}
                onPress={() => {
                  setcancelCompleteModalVis({
                    visible: !cancelCompleteModalVis.visible,
                    type: 'cancelTransaction',
                  });
                  setuserHubModalVis(!userHubModalVis);
                }}
              />
              <Button
                title="Spot Switch complete"
                size="small"
                onPress={() => {
                  setcancelCompleteModalVis({
                    visible: !cancelCompleteModalVis.visible,
                    type: 'spotSwitchComplete',
                  });
                  setuserHubModalVis(!userHubModalVis);
                }}
              />
            </View>
            <View style={styles.chatContainer}>
              <ScrollView style={styles.scrollMessagingContainer}>
                <View style={styles.scrollItemsContainer}>{displayMessages()}</View>
              </ScrollView>
              <View style={styles.messageChat}>
                <TextInput
                  style={styles.input}
                  placeholder="Type a message..."
                  onChangeText={(text) => setMessage(text)}
                  value={message}
                />
                {message.length ? (
                  <TouchableOpacity
                    style={styles.sendMessageButton}
                    onPress={pushTransactionChatRoomMessage}>
                    <Image source={sendMessage} />
                  </TouchableOpacity>
                ) : null}
              </View>

              <View style={styles.buttonsContainer}>
                <Button
                  size="small"
                  title="On My Way!"
                  customButtonStyles={styles.button}
                  customTextStyles={styles.buttonTitle}
                  onPress={() => pushTransactionChatRoomMessage('On My Way!')}
                />
                <Button
                  size="small"
                  title="Almost There"
                  customButtonStyles={styles.button}
                  customTextStyles={styles.buttonTitle}
                  onPress={() => pushTransactionChatRoomMessage('Almost There')}
                />
                <Button
                  size="small"
                  title="I'm Here"
                  customButtonStyles={styles.button}
                  customTextStyles={styles.buttonTitle}
                  onPress={() => pushTransactionChatRoomMessage("I'm Here")}
                />
                <Button
                  icon={phone}
                  customButtonStyles={styles.button}
                  customTextStyles={styles.buttonTitle}
                  onPress={makeCall}
                />
              </View>
            </View>
          </View>
        ) : null}

        {/* Cancel or Complete Ride Modal */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={cancelCompleteModalVis.visible}
          onRequestClose={() => {
            setcancelCompleteModalVis({
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
                setcancelCompleteModalVis({
                  visible: !cancelCompleteModalVis.visible,
                  type: 'cancelTransaction',
                }),
                  navigation.navigate('SpotExchangeComplete');
              }}
              onPressRight={() =>
                setcancelCompleteModalVis({
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

export default SpotExchange;
