import React from 'react';

import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './Onboarding.styles';
import Button from '../../components/Button/Button';
import Link from '../../components/Link/Link';

const Onboarding = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../images/spotbackLogoFull.png')}
      />
      <View style={styles.button}>
        <Button
          title="Sign Up With Email"
          size='large'
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
      <Link
        extraText="Already have an account?"
        linkText="Log in"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default Onboarding;
