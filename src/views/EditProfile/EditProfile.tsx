import React from 'react';
import { View, Text, Image } from 'react-native';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import editProfile from '../../images/editProfile.png';
import profilePic from '../../images/profilePic.png';
import styles from './EditProfile.styles';

const EditProfile = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={editProfile} />
      <Image style={styles.profilePicImage} source={profilePic} />
      <View style={styles.centerContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.subText}>Email: </Text>
          <Input inputStyle="small" />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.subText}>License Plate: </Text>
          <Input inputStyle="small" />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.subText}>Vehicle Make: </Text>
          <Input inputStyle="small" />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.subText}>Vehicle Size: </Text>
          <Input inputStyle="small" />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Save" size="large" />
      </View>
    </View>
  );
};

export default EditProfile;
