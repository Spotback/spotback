import React, { FC } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import useStyles from './Button.styles';

interface ButtonProps {
  title?: string;
  titleColor?: string;
  backgroundColor?: string;
  size?: string;
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
      {size === 'large' && (
        <View style={customButtonStyles ? customButtonStyles : styles.buttonLarge}>
          <Text style={customTextStyles ? customTextStyles : styles.titleLarge}>{title}</Text>
        </View>
      )}
      {size === 'medium' && (
        <View style={customButtonStyles ? customButtonStyles : styles.buttonMedium}>
          <Text style={customTextStyles ? customTextStyles : styles.titleMedium}>{title}</Text>
          {/* @TODO: Figure out issue with icon sizing */}
          {icon && <Image style={title === 'EV Spot' ? '' : (styles.icon as any)} source={icon} />}
        </View>
      )}
      {size === 'small' && (
        <View style={customButtonStyles ? customButtonStyles : styles.buttonSmall}>
          <Text style={customTextStyles ? customTextStyles : styles.titleSmall}>{title}</Text>
        </View>
      )}
      {icon && !size && (
        <View style={customButtonStyles ? customButtonStyles : styles.buttonSmall}>
          <Image source={icon} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
