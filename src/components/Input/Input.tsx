import React, { FC, useState } from 'react';
import { TextInput, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from '@env';
import useStyles from './Input.styles';

interface Inputprops {
  placeholder?: any;
  inputStyle: string;
  onBlur?: any;
  onChangeText?: any;
  value?: any;
  autoComplete?: boolean;
  onPress?: any;
  autoCapitalize?: any;
}
const Input: FC<Inputprops> = ({
  placeholder,
  inputStyle,
  onBlur,
  onChangeText,
  value,
  autoComplete,
  onPress,
  autoCapitalize = 'sentences',

}) => {
  const styles = useStyles();
  return (
    <>
      {autoComplete ? (
        <GooglePlacesAutocomplete
          currentLocation
          fetchDetails={true}
          placeholder={placeholder}
          onPress={onPress}
          query={{
            key: GOOGLE_API_KEY,
            language: 'en',
          }}
        />
      ) : (
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          style={
            inputStyle === 'large'
              ? styles.largeInput
              : inputStyle === 'medium'
              ? styles.mediumInput
              : styles.smallInput
          }
          onBlur={onBlur}
          autoCapitalize={autoCapitalize}
        />
      )}
    </>
  );
};

export default Input;
