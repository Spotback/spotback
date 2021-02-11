import React from 'react';
import {View, Text, Image} from 'react-native';

import Button from '../../components/Button/Button';
import help from '../../images/help.png';
import styles from './Help.styles';

const InviteAFriend = () => {


  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Help</Text>
        <Image style={styles.image} source={help} />
      </View>
      <View style={styles.centerContainer}>
        <Button title="Contact Support" size="large" />
      </View>
    </View>
  );
};

export default InviteAFriend;
