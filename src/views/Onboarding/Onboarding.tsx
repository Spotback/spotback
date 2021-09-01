import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Loader, Button, Link } from '@components/index';
import { spotbackLogoFull } from '@assets/images/index';
import styles from './Onboarding.styles';

const Onboarding = () => {
  const navigation = useNavigation();
  // true for loader
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      {/* for testing the loader  */}
      {loading === false ? (
        <>
          <Image style={styles.image} source={spotbackLogoFull} />
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
