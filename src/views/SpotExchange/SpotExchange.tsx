/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable react/no-unescaped-entities */
import { phone, sendMessage } from '@assets/images/index';
import { Button, Hub, Options, Stars } from '@components/index';
import Polyline from '@mapbox/polyline';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import { useNavigation } from '@react-navigation/native';
import { theme } from '@utils/theme';
import React, { useEffect, useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
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
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { RootStateOrAny, useSelector } from 'react-redux';
import useStyles from './SpotExchange.styles';
import { GOOGLE_API_KEY } from '@env';

const SpotExchange = () => {
  const styles = useStyles();
  const navigation = useNavigation();
  const user = useSelector((state: RootStateOrAny) => state.userReducer);
  const transactionId = useSelector((state: RootStateOrAny) => state.userReducer.transactionId);
  const [modalVis, setModalVis] = useState(false);
  const [hubVis, setHubVis] = useState(false);
  const [imageSource, setImageSource] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState({});
  const [secondaryModalVis, setSecondaryModalVis] = useState({
    visible: false,
    type: 'cancelTransaction' || 'spotSwitchComplete',
  });

  const dbChatRoomRef = database().ref(`chat_rooms/-${transactionId}/messages`);

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
      const resp = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=${GOOGLE_API_KEY}`
      );
      const respJson = await resp.json();
      const points = Polyline.decode(respJson.routes[0].overview_polyline.points);
      const coords = points.map((point, index) => {
        return {
          latitude: point[0],
          longitude: point[1],
        };
      });
      // this.setState({coords: coords})
      console.log('coords**************** ', coords);
      // return coords;
    } catch (error) {
      console.log('error ', error);
      // return error;
    }
  };

  useEffect(() => {
    getProfilePic();
    getDirections('28.694004, 77.110291', '28.72082, 77.107241)');
  }, []);

  useEffect(() => {
    retrieveTransactionChatRoomMessages();
  }, [message]);

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

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <View style={styles.mapView}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          />
        </View>
        <Hub
          title="Arriving in 5 Minutes"
          client
          imageSource={imageSource}
          balance={15}
          onPress={() => {
            setHubVis(!hubVis);
            setModalVis(!modalVis);
          }}
          hide={hubVis}
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
                    <Stars starSize={20} starWidth={3} />
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
                  setSecondaryModalVis({
                    visible: !secondaryModalVis.visible,
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
          visible={secondaryModalVis.visible}
          onRequestClose={() => {
            setSecondaryModalVis({
              visible: !secondaryModalVis.visible,
              type: 'cancelTransaction',
            });
          }}>
          <View style={styles.innerModalContainer}>
            <Options
              leftButtonColor={
                secondaryModalVis.type === 'cancelTransaction'
                  ? theme.colors.error
                  : theme.colors.light
              }
              rightButtonColor={
                secondaryModalVis.type === 'cancelTransaction'
                  ? theme.colors.success
                  : theme.colors.light
              }
              leftButtonTitle={secondaryModalVis.type === 'cancelTransaction' ? 'Yes' : 'Complete'}
              rightButtonTitle={secondaryModalVis.type === 'cancelTransaction' ? 'No' : 'Not Yet'}
              type="standard"
              onPressLeft={() => {
                setSecondaryModalVis({
                  visible: !secondaryModalVis.visible,
                  type: 'cancelTransaction',
                }),
                  navigation.navigate('SpotExchangeComplete');
              }}
              onPressRight={() =>
                setSecondaryModalVis({
                  visible: !secondaryModalVis.visible,
                  type: 'cancelTransaction',
                })
              }
              texts={
                secondaryModalVis.type === 'cancelTransaction'
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
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={10}
          enabled
          style={styles.bottomContainer}>
          <View style={styles.spotSwitchCompleteContainer}>
            <Button
              title="Spot Switch complete"
              size="small"
              onPress={() => {
                setSecondaryModalVis({
                  visible: !secondaryModalVis.visible,
                  type: 'spotSwitchComplete',
                });
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
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default SpotExchange;
