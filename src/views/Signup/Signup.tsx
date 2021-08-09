import React from 'react';

import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import styles from './Signup.styles';

const Signup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Input placeholder="Your Email" inputStyle="long" />
      <View style={styles.centerContainer}>
        <View style={styles.input}>
          <Input placeholder="First Name" inputStyle="short" />
        </View>
        <View style={styles.input}>
          <Input placeholder="Last Name" inputStyle="short" />
        </View>
        <View style={styles.input}>
          <Input placeholder="Phone Number" inputStyle="short" />
        </View>
        <View style={styles.input}>
          <Input placeholder="Password" inputStyle="short" />
        </View>
        <Input placeholder="Referral Code" inputStyle="long" />
        <View style={styles.button}>
          <Button title="Sign Up" size='large' onPress={() => navigation.navigate('Home')} />
        </View>
      </View>
    </View>
  );
};

export default Signup;