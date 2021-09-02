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
  return (
    <TouchableOpacity onPress={onPress}>
      {size && size === 'large' && (
        <View style={styles.buttonLarge}>
          <Text style={styles.titleLarge}>{title}</Text>
        </View>
      )}
      {size && size === 'medium' && (
        <View style={titleColor ? styles.buttonColors : styles.buttonMedium}>
          <Text
            style={
              titleColor === 'red'
                ? styles.redTitle
                : titleColor === 'green'
                ? styles.greenTitle
                : titleColor === 'white'
                ? styles.whiteTitle
                : styles.titleMedium
            }>
            {title}
          </Text>
          {icon && <Image style={title === 'EV Spot' ? '' : (styles.icon as any)} source={icon} />}
        </View>
      )}
      {size && size === 'small' && (
        <View style={backgroundColor === 'gray' ? styles.buttonSmallGray : styles.buttonSmallWhite}>
          <Text
            style={
              titleColor === 'red'
                ? styles.redTitle
                : titleColor === 'green'
                ? styles.greenTitle
                : titleColor === 'white'
                ? styles.whiteTitle
                : styles.titleMedium
            }>
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
