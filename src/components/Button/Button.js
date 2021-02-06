import React from 'react';

import { Text, TouchableOpacity, View, Image } from 'react-native';

import styles from './Button.styles';

const Button = ({ title, onPress, size, icon, color }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {
        size && size === 'large' && (
          <View style={styles.buttonLarge}>
            <Text style={styles.titleLarge}>{title}</Text>
          </View>
        )
      }
      {
        size && size === 'small' && (
          <View style={styles.buttonSmall}>
            <Text style={styles.titleSmall}>{title}</Text>
            <Image style={styles.icon} source={icon} />
          </View>
        )
      }
    </TouchableOpacity>
  );
};

export default Button;
