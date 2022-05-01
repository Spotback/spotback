/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { View, Text, Image, Modal, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useSelector, RootStateOrAny } from 'react-redux';
import { Button, Hub, Stars, Options } from '@components/index';
import { useNavigation } from '@react-navigation/native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { LogBox } from 'react-native';
import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';
import { phone, sendMessage } from '@assets/images/index';
import useStyles from './SpotExchange.styles';
import { theme } from '@utils/theme';

const SpotExchange = () => {
  const styles = useStyles();
  const navigation = useNavigation();
  const [modalVis, setModalVis] = useState(false);

  const [secondaryModalVis, setSecondaryModalVis] = useState({
    visible: false,
    type: 'cancelTransaction' || 'spotSwitchComplete',
  });
  const [hubVis, setHubVis] = useState(false);
  const user = useSelector((state: RootStateOrAny) => state.userReducer);
  const [imageSource, setImageSource] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState({});
  console.log('user email ', user.email);
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

  const retrieveRealTimeMessages = () => {
    database()
      .ref('/chat_rooms/-2016579967/messages')
      .once('value', (messages) => {
        console.log('Users chat data: ', messages.val());
        setMessages(messages.val());
      });
  };

  const pushRealTimeMessage = () => {
    database()
      .ref('/chat_rooms/-2016579967/messages')
      .push({
        created: Math.floor(Date.now() / 1000),
        sender_id: user.email,
        text: message,
      });
    // .then((data) => console.log('data ', data))
    // .catch((error) => console.log('error ', error));
  };
  useEffect(() => {
    getProfilePic();
    retrieveRealTimeMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () =>
      database().ref('/chat_rooms/-2016579967/messages').off('value', retrieveRealTimeMessages);
  }),
    [retrieveRealTimeMessages];

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
        <View style={styles.bottomContainer}>
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
              <View style={styles.scrollItemsContainer}>
                {Object.values(messages).length
                  ? Object.values(messages).map((item: any, index: number) => {
                      return (
                        <View
                          key={index}
                          style={
                            item.sender_id === user.email
                              ? styles.incomingTextRight
                              : styles.incomingTextLeft
                          }>
                          <Text style={styles.incomingTextMsg}>{item.text}</Text>
                        </View>
                      );
                    })
                  : null}
              </View>
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
                  onPress={() => pushRealTimeMessage()}>
                  <Image source={sendMessage} />
                </TouchableOpacity>
              ) : null}
            </View>

            <View style={styles.buttonContainer}>
              <Button
                size="small"
                title="On My Way!"
                customButtonStyles={styles.button}
                customTextStyles={styles.buttonTitle}
              />
              <Button
                size="small"
                title="Almost There"
                customButtonStyles={styles.button}
                customTextStyles={styles.buttonTitle}
              />
              <Button
                size="small"
                title="I'm Here"
                customButtonStyles={styles.button}
                customTextStyles={styles.buttonTitle}
              />
              <Button
                icon={phone}
                customButtonStyles={styles.button}
                customTextStyles={styles.buttonTitle}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SpotExchange;
