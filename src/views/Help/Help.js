import React from 'react';
import {View, Text, Image} from 'react-native';

import Button from '../../components/Button/Button';
import help from '../../images/help.png';
import styles from './Help.styles';

const Help = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={help} />

      <View style={styles.centerContainer}>
        <Button title="Contact Support" size="large" />
      </View>
    </View>
  );
};

export default Help;
