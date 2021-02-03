import React from 'react';

import {View} from 'react-native';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Link from '../../components/Link/Link';

import styles from './Login.styles';

const Login = () => {
  return (
    <View style={styles.container}>
      <Input placeholder="Your Email" inputStyle="long" />
      <View style={styles.centerContainer}>
        <View style={styles.input}>
          <Input placeholder="Password" inputStyle="short" />
        </View>
        <View style={styles.link}>
          <Link linkText="Forgot Password" />
        </View>
      </View>
      <View style={styles.button}>
        <Button title="Log In" />
      </View>
    </View>
  );
};

export default Login;
