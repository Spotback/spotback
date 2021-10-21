import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button, Input } from '@components/index';
import { transfers } from '@assets/images/index';
import useStyles from './TransferToBank.styles';

const TransferToBank = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={transfers} />
      <View style={styles.centerContainer}>
        <Text style={styles.subText}>Spot Balance: $0</Text>
        <View style={styles.itemContainer}>
          <Input inputStyle="large" />
        </View>
        <View style={styles.itemContainer}>
          <Button title="Cash Out" size="large" />
        </View>
      </View>
    </View>
  );
};

export default TransferToBank;
