import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Link.styles';

const Link = (props) => {
  const {extraText, linkText} = props;

  return (
    <View style={styles.container}>
      {extraText && <Text style={styles.extraText}>{extraText}</Text>}
      <TouchableOpacity>
        <Text style={styles.linkText}>{linkText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Link;
