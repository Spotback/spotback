import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, RootStateOrAny } from 'react-redux';
import storage from '@react-native-firebase/storage';
import { Stars, ProfilePic, Options } from '@components/index';
import { Button, Loader } from '@components/index';
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
      <Text style={styles.text}>{"You've just recieved 5 dollars from"}</Text>
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
