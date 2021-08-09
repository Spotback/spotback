import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import menuItems from '../../config/Account.config';
import Stars from '../../components/Stars/Stars';
import profilePic from '../../images/profilePic.png';
import styles from './Account.styles';

const Account = () => {
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
        {menuItems?.map((menuItem, index) => {
          return (
            <TouchableOpacity
              key={menuItem.id}
              onPress={() => navigation.navigate(menuItem.navigationDirection)}>
              <View style={styles.iconContainer}>
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