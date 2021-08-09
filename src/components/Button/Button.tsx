import React, { FC } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import styles from './Button.styles';

interface ButtonProps {
  title: string;
  onPress?: any;
  size: string;
  icon?: any;
  color?: string;
}

const Button: FC<ButtonProps> = ({ title, onPress, size, icon, color }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {size && size === 'large' && (
        <View style={styles.buttonLarge}>
          <Text style={styles.titleLarge}>{title}</Text>
        </View>
      )}
      {size && size === 'small' && (
        <View style={styles.buttonSmall}>
          <Text style={styles.titleSmall}>{title}</Text>
          <Image style={title === 'EV Spot' ? '' : (styles.icon as any)} source={icon} />
        </View>
      )}
      {color && (
        <View style={styles.buttonColors}>
          <Text
            style={
              color === 'red'
                ? styles.buttonRed
                : color === 'green'
                ? styles.buttonGreen
                : styles.buttonWhite
            }>
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
