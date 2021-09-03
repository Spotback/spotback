import React, { FC } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import styles from './Button.styles';

interface ButtonProps {
  title: string;
  titleColor?: string;
  backgroundColor?: string;
  size: string;
  icon?: any;
  onPress?: any;
}

const Button: FC<ButtonProps> = ({ title, onPress, size, icon, titleColor, backgroundColor }) => {
  const classes = styles(titleColor, backgroundColor);
  return (
    <TouchableOpacity onPress={onPress}>
      {size && size === 'large' && (
        <View style={classes.buttonLarge}>
          <Text style={classes.titleLarge}>{title}</Text>
        </View>
      )}
      {size && size === 'medium' && (
        <View style={classes.buttonMedium}>
          <Text style={classes.titleMedium}>{title}</Text>
          {icon && <Image style={title === 'EV Spot' ? '' : (classes.icon as any)} source={icon} />}
        </View>
      )}
      {size && size === 'small' && (
        <View style={classes.buttonSmall}>
          <Text style={classes.titleSmall}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
