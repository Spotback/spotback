import React from 'react';
import { View, Text, Image, Share } from 'react-native';
import Button from '../../components/Button/Button';
import { sendArrow, friends } from '@assets/images/index';
import useStyles from './InviteAFriend.styles';

const InviteAFriend = () => {
  const styles = useStyles();
  const shareReferralCode = () => {
    Share.share({
      title: 'Spotback App',
      message:
        'One of your friends has invited you to the Spotback Beta. Use this link to download the app. https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en',
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
          Share this code with your friends and famila to get more people to sign up for our Beta.
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
