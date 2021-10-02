import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Input } from '@components/index';
import useStyles from './FindMeASpot.styles';
import { spotPin2, evCar } from '@assets/images/index';

const FindMeASpot = () => {
  const styles = useStyles();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Pay $6</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.spacing}>
          <Button
            title="Find Spot here"
            size="medium"
            icon={spotPin2}
            onPress={() => navigation.navigate('SearchingForMatch')}
          />
        </View>
        <View style={styles.spacing}>
          <Button title="EV Spot" size="medium" icon={evCar} />
        </View>
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
