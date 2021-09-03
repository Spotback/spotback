import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Loader } from '@components/index';
import useStyles from './SearchingForMatch.styles';

const SearchingForMatch = () => {
  const styles = useStyles();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Loader />
      <Text style={styles.text}>Searching for a Driver</Text>
      <View style={styles.button}>
        <Button title="Cancel" size="large" onPress={() => navigation.navigate('SpotExchange')} />
      </View>
    </View>
  );
};

export default SearchingForMatch;
