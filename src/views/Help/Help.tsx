import React from 'react';
import { View, Image } from 'react-native';
import { Button } from '@components/index';
import { help } from '@assets/images/index';
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
