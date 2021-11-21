/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Pressable,
} from 'react-native';
import { useSelector, RootStateOrAny } from 'react-redux';
import { Button, Hub, Stars } from '@components/index';
import { useNavigation } from '@react-navigation/native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { LogBox } from 'react-native';
import storage from '@react-native-firebase/storage';
import { phone } from '@assets/images/index';
import useStyles from './SpotExchange.styles';
import { theme } from '@utils/theme';

const SpotExchange = () => {
  const styles = useStyles();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [hubVis, setHubVis] = useState(false);
  const user = useSelector((state: RootStateOrAny) => state.userReducer);
  const [imageSource, setImageSource] = useState('');

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

  useEffect(() => {
    getProfilePic();
  });

  const modalVisability = () => {
    setModalVisible(!modalVisible);
    setHubVis(!hubVis);
  };
  return (
    <View style={styles.mainContainer}>
      <Hub
        title="Arrving in 5 Minutes"
        client
        imageSource={imageSource}
        balance={15}
        onPress={() => modalVisability()}
        hide={hubVis}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          modalVisability();
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.centeredView}>
            <TouchableOpacity onPress={() => modalVisability()}>
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
            />
          </View>
        </View>
      </Modal>

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
        <View style={styles.messengerContainer}>
          <View style={styles.spotSwitchCompleteContainer}>
            <Button
              title="Spot Switch complete"
              size="small"
              onPress={() => navigation.navigate('Home')}
            />
          </View>

          <View style={styles.container}>
            <ScrollView style={styles.incomingText}></ScrollView>
            <TextInput
              style={styles.input}
              placeholder="Type a message..."
              //   onChangeText={onChangeText} value={value}
            />
            <View style={styles.buttonContainer}>
              {/* TODO: Use Button component with custom button styles */}
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTitle}>On My Way!</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTitle}>Almost There</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTitle}>I'm Here</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Image source={phone} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SpotExchange;
