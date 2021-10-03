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
  customButtonStyles?: any;
  customTextStyles?: any;
}

const Button: FC<ButtonProps> = ({
  title,
  onPress,
  size,
  icon,
  titleColor,
  backgroundColor,
  customButtonStyles,
  customTextStyles,
}) => {
  const styles = useStyles(titleColor, backgroundColor)();
  return (
    <TouchableOpacity onPress={onPress}>
      {size && size === 'large' && (
        <View style={customButtonStyles ? customButtonStyles : styles.buttonLarge}>
          <Text style={customTextStyles ? customTextStyles : styles.titleLarge}>{title}</Text>
        </View>
      )}
      {size && size === 'medium' && (
        <View style={customButtonStyles ? customButtonStyles : styles.buttonMedium}>
          <Text style={customTextStyles ? customTextStyles : styles.titleMedium}>{title}</Text>
          {icon && <Image style={title === 'EV Spot' ? '' : (styles.icon as any)} source={icon} />}
        </View>
      )}
      {size && size === 'small' && (
        <View style={customButtonStyles ? customButtonStyles : styles.buttonSmall}>
          <Text style={customTextStyles ? customTextStyles : styles.titleSmall}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
