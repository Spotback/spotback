import React from 'react';
import { View, Text, Image, Share } from 'react-native';
import Button from '../../components/Button/Button';
import { sendArrow, friends } from '@assets/images/index';
import styles from './InviteAFriend.styles';

const InviteAFriend = () => {
  const shareReferralCode = () => {
    Share.share({
      title: 'Spotback App',
      message:
        'One of your friends has given you 1 free Spot or $2 account credit. Use this link to download the app, https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en',
    }).then(({ action }) => {
      if (action === Share.sharedAction) console.log('Share was successful');
      else console.log('Share was dismissed');
    });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={friends} />
      <View style={styles.centerContainer}>
        <Text style={styles.subText}>
          Share this code with your friends and recieve a free spot on thier first spot
          exchange.Their first spot exchange is on us!
        </Text>

        <View style={styles.secondaryContainer}>
          <Text style={styles.subText}>Share your referral code</Text>
          <Button title="joeyC4568" size="large" onPress={() => shareReferralCode()} />
          <Image style={styles.sendArrow} source={sendArrow} />
        </View>
      </View>
    </View>
  );
};

export default InviteAFriend;
