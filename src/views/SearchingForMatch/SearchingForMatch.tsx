import { Button, Loader } from '@components/index';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
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
