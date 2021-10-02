import React, { useState, useEffect } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { View, Text, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import SlidingView from 'rn-sliding-view';
import { LogBox } from 'react-native';
import storage from '@react-native-firebase/storage';
import spotNewsItems from '../../config/Home.config';
import { Header, Button } from '@components/index';
import { spotPin } from '@assets/images/index';
import useStyles from './Home.styles';

const Home = () => {
  const styles = useStyles();
  const navigation = useNavigation();

  const user = useSelector((state: RootStateOrAny) => state.userReducer);
  console.log('userSelector ', user);
  const [imageSource, setImageSource] = useState('');

  const [spotNewsVisible, setspotNewsVisible] = useState(false);

  const toggleSpotNewsVisibility = () => setspotNewsVisible(!spotNewsVisible);

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
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  });

  return (
    <View style={styles.mainContainer}>
      <Header
        title="Account"
        imageSource={imageSource}
        balance={15}
        onPress={() => navigation.navigate('Account')}
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
            }}>
            <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} image={spotPin} />
          </MapView>
        </View>
        <View style={styles.smallButtonContainer}>
          <View style={styles.spacing}>
            <Button
              title="Pin Spot"
              size="small"
              onPress={() => navigation.navigate('FindMeASpot')}
            />
          </View>
          <View style={styles.spacing}>
            <Button
              title="Remove Pin"
              size="small"
              onPress={() => navigation.navigate('PostMySpot')}
            />
          </View>
        </View>
        <View style={styles.largeButtonContainer}>
          <View style={styles.spacing}>
            <Button
              title="Find Me A Spot"
              size="large"
              onPress={() => navigation.navigate('FindMeASpot')}
            />
          </View>
          <View style={styles.spacing}>
            <Button
              title="Post My Spot"
              size="large"
              onPress={() => navigation.navigate('PostMySpot')}
            />
          </View>
        </View>
      </View>
      <Header title="SpotNews" flip={true} onPress={toggleSpotNewsVisibility} />
      <SlidingView
        componentVisible={spotNewsVisible}
        changeVisibilityCallback={toggleSpotNewsVisibility}
        useNativeDriver={true}
        height={styles.slider.height}
        containerStyle={styles.slider}
        disableDrag={true}>
        <Header title="SpotNews" flip={true} onPress={toggleSpotNewsVisibility} />
        <ScrollView>
          <View style={styles.sliderContainer}>
            {spotNewsItems?.map((spotNewsItem, index) => {
              return (
                <View key={spotNewsItem.id} style={styles.spotNewsContainer}>
                  <View style={styles.textContainer}>
                    <Text style={styles.text}>{spotNewsItem.title}</Text>
                  </View>
                  <Image style={styles.image} source={spotNewsItem.image} />
                </View>
              );
            })}
          </View>
        </ScrollView>
      </SlidingView>
    </View>
  );
};

export default Home;
