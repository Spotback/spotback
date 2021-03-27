import React, {useState} from 'react';

import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './Onboarding.styles';
import Button from '../../components/Button/Button';
import Link from '../../components/Link/Link';

import Loader from '../../components/Loader/Loader';

const Onboarding = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  return (
    <View style={styles.container}>
      {loading === false ? (
        <>
          <Image
            style={styles.image}
            source={require('../../images/spotbackLogoFull.png')}
          />
          <View style={styles.button}>
            <Button
              title="Sign Up With Email"
              size="large"
              onPress={() => navigation.navigate('Signup')}
            />
          </View>
          <Link
            extraText="Already have an account?"
            linkText="Log in"
            onPress={() => navigation.navigate('Login')}
          />
        </>
      ) : (
        <Loader />
      )}
    </View>
  );
};

export default Onboarding;
