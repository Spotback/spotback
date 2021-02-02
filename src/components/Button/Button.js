import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from "./Button.styles";

const Button = (props) => {
  const {title} = props;
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
