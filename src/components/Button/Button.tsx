import React, { FC } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import useStyles from './Button.styles';

interface ButtonProps {
  title: string;
  titleColor?: string;
  backgroundColor?: string;
  size: string;
  icon?: any;
  onPress?: any;
}

const Button: FC<ButtonProps> = ({ title, onPress, size, icon, titleColor, backgroundColor }) => {
  const styles = useStyles(titleColor, backgroundColor)();
  return (
    <TouchableOpacity onPress={onPress}>
      {size && size === 'large' && (
        <View style={styles.buttonLarge}>
          <Text style={styles.titleLarge}>{title}</Text>
        </View>
      )}
      {size && size === 'medium' && (
        <View style={styles.buttonMedium}>
          <Text style={styles.titleMedium}>{title}</Text>
          {icon && <Image style={title === 'EV Spot' ? '' : (styles.icon as any)} source={icon} />}
        </View>
      )}
      {size && size === 'small' && (
        <View style={styles.buttonSmall}>
          <Text style={styles.titleSmall}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
