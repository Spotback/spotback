import { editProfile, exit, help, invite } from '@assets/images/index';
import { ProfilePic, Stars } from '@components/index';
import storage from '@react-native-firebase/storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { RootStateOrAny, useSelector } from 'react-redux';
import { removeAsyncStorage } from '../../utils/asyncStorage';
import useStyles from './Account.styles';

const Account = () => {
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
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <ProfilePic imageSource={imageSource} size="large" />
        <View style={styles.starContainer}>
          <Stars starSize={20} starWidth={5} rating={user.rating}/>
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
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
