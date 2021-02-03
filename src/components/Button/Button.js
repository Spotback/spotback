import React from 'react';

import {Text, TouchableOpacity, View} from 'react-native';

import styles from './Button.styles';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
