import React, { useEffect } from 'react';
import { ActivityIndicator, StatusBar, View, Text } from 'react-native';
import { storeData, getData } from '../../utils/asyncStorage';

const AuthLoading = () => {
  useEffect(() => {
    getData();
  }, []);
  return (
    <View>
      <Text>Spotback auth loading</Text>
      <ActivityIndicator />
    </View>
  );
};

export default AuthLoading;
