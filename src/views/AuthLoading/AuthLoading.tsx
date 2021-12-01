import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Loader } from '@components/index';
import { setAsyncStorage, getAsyncStorage } from '@utils/asyncStorage';
import useStyles from './AuthLoading.styles';

const AuthLoading = () => {
  const styles = useStyles();
  useEffect(() => {
    getAsyncStorage();
  }, []);
  return (
    <View style={styles.container}>
      <Loader />
    </View>
  );
};

export default AuthLoading;
