import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@components/index';
import { theme } from '@utils/theme';
import useStyles from './PostMySpot.styles';

const PostMySpot = () => {
  const styles = useStyles();
  const navigation = useNavigation();

  const [where, setWhere] = useState('');
  const [when, setWhen] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>234 San Pedro Sq.</Text>
        <Text style={styles.titleText}>Recieve $5</Text>
      </View>
      <View style={styles.centerContainer}>
        <View style={styles.subContainer}>
          <Text style={styles.subText}>Where did</Text>
          <Text style={styles.subText}>you park?</Text>
        </View>
        <View style={styles.picker}>
          <Picker
            dropdownIconColor={theme.colors.light}
            style={styles.dropDown}
            selectedValue={where}
            onValueChange={(itemValue, itemIndex) => setWhere(itemValue)}>
            <Picker.Item label="Street" value="street" />
            <Picker.Item label="Parking Lot" value="parking" />
            <Picker.Item label="Driveway" value="driveway" />
            <Picker.Item label="EV Spot" value="ev" />
          </Picker>
        </View>
      </View>
      <View style={styles.centerContainer}>
        <View style={styles.subContainer}>
          <Text style={styles.subText}>When will you</Text>
          <Text style={styles.subText}>get to your car?</Text>
        </View>
        <View style={styles.picker}>
          <Picker
            dropdownIconColor={theme.colors.light}
            style={styles.dropDown}
            selectedValue={when}
            onValueChange={(itemValue, itemIndex) => setWhen(itemValue)}>
            <Picker.Item label="Now" value="now" />
            <Picker.Item label="5 min" value="5" />
            <Picker.Item label="10 min" value="10" />
            <Picker.Item label="15 min" value="15" />
          </Picker>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Post Spot"
          size="large"
          onPress={() => navigation.navigate('SearchingForMatch')}
        />
      </View>
    </View>
  );
};

export default PostMySpot;
