import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useSelector, RootStateOrAny } from 'react-redux';
import storage from '@react-native-firebase/storage';
import { useNavigation } from '@react-navigation/native';
import { removeAsyncStorage } from '../../utils/asyncStorage';
import { Stars, ProfilePic } from '@components/index';
import { transfers, invite, editProfile, help, creditCard, exit } from '@assets/images/index';
import useStyles from './Account.styles';

const Account = () => {
  const styles = useStyles();
  const navigation = useNavigation();
  const [imageSource, setImageSource] = useState('');

  const user = useSelector((state: RootStateOrAny) => state.userReducer);
  console.log('user', user);
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
    <View style={styles.container}>
      <ProfilePic imageSource={imageSource} size="large" />
      <View style={styles.starContainer}>
        <Stars starSize={20} starWidth={5} />
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.titleText}>
          {user.firstName} {user.lastName}
        </Text>
        <Text style={styles.subText}>{user.email}</Text>
        <Text style={styles.subText}>{user.phone}</Text>
        <Text style={styles.subText}>
          {user.car.make} {user.car.model} {user.car.year} {user.car.color}
        </Text>
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
        <TouchableOpacity onPress={() => removeAsyncStorage()}>
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
