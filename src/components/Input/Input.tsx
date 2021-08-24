import React, { FC, useState } from 'react';
import { TextInput } from 'react-native';
import styles from './Input.styles';

interface Inputprops {
  placeholder?: any;
  inputStyle: string;
  onBlur?: any;
  onChangeText?: any;
  value?: any;
}
const Input: FC<Inputprops> = ({ placeholder, inputStyle, onBlur, onChangeText, value }) => {
  return (
    <TextInput
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      style={inputStyle === 'long' ? styles.longInput : styles.smallInput}
      onBlur={onBlur}
    />
  );
};

export default Input;
