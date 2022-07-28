import { Options, ProfilePic, Stars } from '@components/index';
import storage from '@react-native-firebase/storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { RootStateOrAny, useSelector } from 'react-redux';
import useStyles from './SpotExchangeComplete.styles';

const SpotExchangeComplete = () => {
  const styles = useStyles();
  const navigation = useNavigation();

  const [imageSource, setImageSource] = useState('');

  const user = useSelector((state: RootStateOrAny) => state.userReducer);

  const getProfilePic = () => {
    storage()
      .ref(`users/profile_images/${user.email.replace('@', '_').replace('.', '_')}.png`)
      .getDownloadURL()
      .then((url: string) => {
        url ? setImageSource(url) : setImageSource('');
      })
      .catch((e) => console.log('getting downloadURL of image error => ', e));
  };

  useEffect(() => {
    getProfilePic();
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{"You've just recieved 5 points from"}</Text>
      <ProfilePic imageSource={imageSource} size="large" />
      <Text style={styles.text}>Users Name</Text>
      <View style={styles.starContainer}>
        <Stars starSize={30} starWidth={5} disabled={false} />
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
