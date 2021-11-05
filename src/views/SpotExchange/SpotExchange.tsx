import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useSelector, RootStateOrAny } from 'react-redux';
import { Button, Hub, Messenger } from '@components/index';
import { useNavigation } from '@react-navigation/native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { LogBox } from 'react-native';
import storage from '@react-native-firebase/storage';
import useStyles from './SpotExchange.styles';

const SpotExchange = () => {
  const styles = useStyles();
  const navigation = useNavigation();

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
  return (
    <View style={styles.mainContainer}>
      <Hub
        title="Arrving in 5 Minutes"
        client
        imageSource={imageSource}
        balance={15}
        onPress={() => navigation.navigate('Home')}
      />
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

        <View style={styles.buttonContainer}>
          <Messenger />
        </View>
      </View>
    </View>
  );
};

export default SpotExchange;
