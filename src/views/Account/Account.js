import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import Stars from '../../components/Stars/Stars';
import profilePic from '../../images/profilePic.png';

import styles from './Account.styles';

const Account = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Account</Text>
      </View>
      <Image style={styles.profilePicImage} source={profilePic} />
      <View style={styles.starContainer}>
        <Stars />
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.titleText}>Walter White</Text>
        <Text style={styles.subText}>ww.white@gmail.com</Text>
        <Text style={styles.subText}>408-379-6732</Text>
        <Text style={styles.subText}>BMW 3 Series 2013 Black</Text>
      </View>
    </View>
  );
};

export default Account;
