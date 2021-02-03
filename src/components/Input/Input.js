import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import styles from './Input.styles';

const Input = ({placeholder, inputStyle}) => {
  const [value, onChangeText] = useState('');

  return (
      <TextInput
        onChangeText={(text) => onChangeText(text)}
        value={value}
        placeholder={placeholder}
        style={inputStyle === 'long' ? styles.longInput : styles.smallInput}
      />
  );
};

export default Input;
