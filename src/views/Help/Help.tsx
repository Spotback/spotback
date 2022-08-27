import { help } from '@assets/images/index';
import { Button } from '@components/index';
import React from 'react';
import { Image, View } from 'react-native';
import useStyles from './Help.styles';

const Help = () => {
  const styles = useStyles();
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
