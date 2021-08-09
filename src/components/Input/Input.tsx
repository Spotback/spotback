import React, { FC, useState } from 'react';
import { TextInput } from 'react-native';
import styles from './Input.styles';

interface Inputprops {
  placeholder?: string;
  inputStyle: string;
}
const Input: FC<Inputprops> = ({ placeholder, inputStyle }) => {
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
