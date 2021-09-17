import React, { FC, useState } from 'react';
import { TextInput } from 'react-native';
import useStyles from './Input.styles';

interface Inputprops {
  placeholder?: any;
  inputStyle: string;
  onBlur?: any;
  onChangeText?: any;
  value?: any;
}
const Input: FC<Inputprops> = ({ placeholder, inputStyle, onBlur, onChangeText, value }) => {
  const styles = useStyles();
  return (
    <TextInput
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      style={
        inputStyle === 'long'
          ? styles.longInput
          : inputStyle === 'small'
          ? styles.smallInput
          : styles.miniInput
      }
      onBlur={onBlur}
    />
  );
};

export default Input;
