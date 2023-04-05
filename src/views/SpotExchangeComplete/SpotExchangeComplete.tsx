import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import storage from '@react-native-firebase/storage';
import { useNavigation } from '@react-navigation/native';

import { Options, ProfilePic, Stars } from '@components/index';
import { UserSpotPosition } from '@services/types';
import { userPositionSelector, driverSelector, parkerSelector, userRatingSelector } from '../../services/selectors';

import useStyles from './SpotExchangeComplete.styles';

const SpotExchangeComplete = () => {
  const styles = useStyles();
  const navigation = useNavigation();
  const userPosition = useSelector(userPositionSelector);
  const driver = useSelector(driverSelector);
  const parker = useSelector(parkerSelector);
  const userRating = useSelector(userRatingSelector)
  const [matchProfilePicSource, setMatchProfilePicSource] = useState('');

  const matchEmail = userPosition === UserSpotPosition.DRIVER ? parker.email : driver.email;
  const matchName = userPosition === UserSpotPosition.DRIVER ? `${parker.firstName} ${parker.lastName}` : `${driver.firstName} ${driver.lastName}`;

  const getMatchProfilePic = () => {
    storage()
      .ref(`users/profile_images/${matchEmail.replace('@', '_').replace('.', '_')}.png`)
      .getDownloadURL()
      .then((url: string) => {
        url ? setMatchProfilePicSource(url) : setMatchProfilePicSource('');
      })
      .catch((e) => console.log('getting downloadURL of image error => ', e));
  };

  useEffect(() => {
    getMatchProfilePic();
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{"You've just received 5 points from"}</Text>
      <ProfilePic imageSource={matchProfilePicSource} size="large" />
      <Text style={styles.text}>{matchName}</Text>
      <View style={styles.starContainer}>
        <Stars starSize={30} starWidth={5} disabled={false} rating={userRating} />
      </View>

      <Options
        type="input"
        texts={['Comments? (Required)']}
        onPressLeft={() => navigation.navigate('SpotExchange')}
        leftButtonTitle="Feedback"
        onPressRight={() => navigation.navigate('Home')}
        rightButtonTitle="Finish"
      />
    </SafeAreaView>
  );
};

export default SpotExchangeComplete;
