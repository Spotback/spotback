import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Input, Options } from '@components/index';
import useStyles from './FindMeASpot.styles';
import { spotPin2, evCar } from '@assets/images/index';

const FindMeASpot = () => {
  const styles = useStyles();
  const navigation = useNavigation();
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  console.log('coords ', latitude, longitude);
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
        <Input
          placeholder="Enter destination"
          inputStyle="large"
          autoComplete
          onPress={(data: any, details: any) => {
            console.log('DATA on Press', data);
            console.log('DETAILS on Press, details ', details);
            setLatitude(details.geometry.location.lat);
            setLongitude(details.geometry.location.lng);
          }}
        />
      </View>
    </View>
  );
};

export default FindMeASpot;
