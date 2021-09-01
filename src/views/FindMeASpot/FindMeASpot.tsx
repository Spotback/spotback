import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Input } from '@components/index';
import styles from './FindMeASpot.styles';
import { spotPin2, evCar } from '@assets/images/index';

const FindMeASpot = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Pay $6</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Find Spot here"
          size="small"
          icon={spotPin2}
          onPress={() => navigation.navigate('SearchingForMatch')}
        />
        <Button title="EV Spot" size="small" icon={evCar} />
      </View>
      <View style={styles.centerContainer}>
        <View>
          <Input placeholder="Enter destination" inputStyle="long" />
        </View>
      </View>
    </View>
  );
};

export default FindMeASpot;
