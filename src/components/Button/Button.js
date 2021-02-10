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
            <Image style={title === "EV Spot" ? "" : styles.icon} source={icon} />
          </View>
        )
      }
      {
        color && (
          <View style={styles.buttonColors}>
            <Text
              style={
                color === 'red' ? 
                styles.buttonRed : 
                color === 'green' ? 
                styles.buttonGreen :
                styles.buttonWhite
              }
            >{title}</Text>
          </View>
        )
      }
    </TouchableOpacity>
  );
};

export default Button;
