import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Stars from '../../components/Stars/Stars';
import profilePic from '../../images/profilePic.png';
import transfers from '../../images/transfers.png';
import invite from '../../images/invite.png';
import editProfile from '../../images/editProfile.png';
import help from '../../images/help.png';
import creditCard from '../../images/creditCard.png';
import exit from '../../images/exit.png';
import styles from './Account.styles';

const Account = () => {
  const navigation = useNavigation();

  const menuItems = [
    {
      image: transfers,
      title: 'Transfer to Bank',
      navigationDirection: 'Home',
      id: 1,
    },
    {
      image: invite,
      title: 'Invite a Friend',
      navigationDirection: 'Home',
      id: 2,
    },
    {
      image: editProfile,
      title: 'Edit Profile',
      navigationDirection: 'Home',
      id: 3,
    },
    {image: help, title: 'Help', navigationDirection: 'Home', id: 4},
    {
      image: creditCard,
      title: 'Payment Information',
      navigationDirection: 'Home',
      id: 5,
    },
    {image: exit, title: 'Sign Out', navigationDirection: 'Home', id: 6},
  ];

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
      <ScrollView>
        {menuItems.map((menuItem, index) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <View key={menuItem.id} style={styles.iconContainer}>
                <Image style={styles.image} source={menuItem.image} />
                <Text style={styles.text}>{menuItem.title}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Account;
