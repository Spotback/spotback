import React, {useState, useEffect, useRef} from 'react';
import {View, Text} from 'react-native';

import Button from '../../components/Button/Button';

import styles from './PostMySpot.styles';

const PostMySpot = () => {
  const [where, setWhere] = useState(0);
  const [when, setWhen] = useState(0);

  let optionList1 = ['Street', 'Parking Lot', 'Driveway', 'EV Spot'];
  let optionList2 = ['Now', '5 min', '10 min', '15 min'];

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>234 San Pedro Sq.</Text>
        <Text style={styles.titleText}>Recieve $5</Text>
      </View>
      <View style={styles.centerContainer}>
        <View style={styles.subContainer}>
          <Text style={styles.subText}>Where did you park?</Text>
        </View>
        <View>
          <Text>list</Text>
        </View>
      </View>
      <View style={styles.centerContainer}>
        <View style={styles.subContainer}>
          <Text style={styles.subText}>When will you get to your car?</Text>
        </View>
        <View>
          <Text>list</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Post Spot" size="large" />
      </View>
    </View>
  );
};

export default PostMySpot;
