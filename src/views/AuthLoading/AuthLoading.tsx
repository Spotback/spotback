import React, { useEffect } from 'react';
import { View } from 'react-native';
import { getData } from '../../utils/asyncStorage';
import Loader from '../../components/Loader/Loader';
import styles from './AuthLoading.styles';

const AuthLoading = () => {
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.container}>
      <Loader />
    </View>
  );
};

export default AuthLoading;
