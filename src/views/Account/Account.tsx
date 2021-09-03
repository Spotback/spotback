import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { removeData } from '../../utils/asyncStorage';
import Stars from '../../components/Stars/Stars';
import {
  profilePic,
  transfers,
  invite,
  editProfile,
  help,
  creditCard,
  exit,
} from '@assets/images/index';
import useStyles from './Account.styles';

const Account = () => {
  const styles = useStyles();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
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
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('TransferToBank')}>
          <View style={styles.iconContainer}>
            <Image style={styles.image} source={transfers} />
            <Text style={styles.text}>Transfer to Bank</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('InviteAFriend')}>
          <View style={styles.iconContainer}>
            <Image style={styles.image} source={invite} />
            <Text style={styles.text}>Invite a Friend</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <View style={styles.iconContainer}>
            <Image style={styles.image} source={editProfile} />
            <Text style={styles.text}>Edit Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Help')}>
          <View style={styles.iconContainer}>
            <Image style={styles.image} source={help} />
            <Text style={styles.text}>Help</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={styles.iconContainer}>
            <Image style={styles.image} source={creditCard} />
            <Text style={styles.text}>Payment Information</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeData()}>
          <View style={styles.iconContainer}>
            <Image style={styles.image} source={exit} />
            <Text style={styles.text}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Account;
