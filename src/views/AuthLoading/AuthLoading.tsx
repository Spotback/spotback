import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Loader } from '@components/index';
import { storeData, getData } from '@utils/asyncStorage';
import useStyles from './AuthLoading.styles';

const AuthLoading = () => {
  const styles = useStyles();
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
