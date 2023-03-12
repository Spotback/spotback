import { GOOGLE_API_KEY } from '@env';
import { theme } from '@utils/theme';
import React, { FC } from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import useStyles from './Input.styles';

interface Inputprops {
  placeholder?: any;
  inputStyle: string;
  onBlur?: any;
  onChangeText?: any;
  value?: any;
  autoComplete?: boolean;
  onPress?: () => void;
  autoCapitalize?: any;
  isPasswordInput?: boolean;
  hidePassword?: boolean;
  toggleEyeIcon?: any;
  eyeIconSource?: any;
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
  isPasswordInput,
  hidePassword,
  toggleEyeIcon,
  eyeIconSource,
}) => {
  const styles = useStyles(isPasswordInput)();
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
        <View>
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
            placeholderTextColor={theme.colors.shadow}
            onBlur={onBlur}
            autoCapitalize={autoCapitalize}
            secureTextEntry={hidePassword}
          />
          {isPasswordInput ? (
            <TouchableOpacity onPress={toggleEyeIcon}>
              <Image style={styles.eyeIconStyles} source={eyeIconSource} />
            </TouchableOpacity>
          ) : null}
        </View>
      )}
    </>
  );
};

export default Input;
