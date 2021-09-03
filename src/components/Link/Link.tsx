import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import useStyles from './Link.styles';

interface LinkProps {
  extraText?: string;
  linkText: string;
  onPress?: any;
}

const Link: FC<LinkProps> = ({ extraText, linkText, onPress }) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      {extraText && <Text style={styles.extraText}>{extraText}</Text>}
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.linkText}>{linkText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Link;
