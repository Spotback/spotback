/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable react/no-unescaped-entities */
import { phone, sendMessage, exit } from '@assets/images/index';
import { Button, Stars, ProfilePic } from '@components/index';
import database from '@react-native-firebase/database';
import { theme } from '@utils/theme';
import React, { useEffect, useState } from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { RootStateOrAny, useSelector } from 'react-redux';
import useStyles from './SpotExchangeDriver.styles';
import { useSetTransactionId } from '../../hooks/useSetTransactionId';

const HubModal = ({ closeHub, cancelPress, spotSwitchCompletePress }) => {
  const styles = useStyles();
  const user = useSelector((state: RootStateOrAny) => state.userReducer);
  const matchedUser = useSelector((state: RootStateOrAny) => state.userReducer.matchedUsersData);
  const transactionId = useSetTransactionId();
  const [matchedCarImageSource, setMatchedCarImageSource] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState({});
  console.log('transactionID !!! ', transactionId);
  const dbChatRoomRef = database().ref(`chat_rooms/-${transactionId}/messages`);
  const carInfo = `${matchedUser.match.car.make}, ${matchedUser.match.car.model}, ${matchedUser.match.car.color}`;
  const licensePlate = `${matchedUser.match.car.licencePlate.toUpperCase()}`;

  const getMatchCarPic = () => {
    const dbCarPictureRef = database().ref(
      `car_pictures_urls/${matchedUser.match.email.replace('@', '_').replace('.', '_')}/url`
    );
    dbCarPictureRef.orderByChild('url').on('value', (url) => {
      setMatchedCarImageSource(url.val());
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

  const displayMessages = () => {
    return messages !== null
      ? Object.values(messages)
          .sort((a: any, b: any) => a.created - b.created)
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
    getMatchCarPic();
  }, [matchedUser.match.email]);

  useEffect(() => {
    retrieveTransactionChatRoomMessages();
  }, [message]);

  return (
    <View style={styles.mainCommunicationsHub}>
      <TouchableOpacity style={styles.communicationHubCloseX} onPress={() => closeHub()}>
        <Image style={styles.xImage} source={exit} />
      </TouchableOpacity>
      <View style={styles.starContainer}>
        <Stars starSize={20} starWidth={3} rating={user.rating} />
      </View>
      <Text style={styles.text}>Camila Rodriguez</Text>
      <Text style={styles.text}>{carInfo}</Text>
      <Text style={styles.text}>{licensePlate}</Text>
      <View style={styles.matchedCarPicContainer}>
        <ProfilePic imageSource={matchedCarImageSource} size="large" blured />
      </View>

      <View style={styles.transactionsButtonContainer}>
        <Button
          size="small"
          title="Cancel Transaction"
          backgroundColor={theme.colors.light}
          titleColor={theme.colors.error}
          onPress={() => cancelPress()}
        />
        <Button
          title="Spot Switch complete"
          size="small"
          onPress={() => spotSwitchCompletePress()}
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
  );
};

export default HubModal;
