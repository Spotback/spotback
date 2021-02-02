import React from 'react';

import {SafeAreaView, View} from 'react-native';
import {Dimensions} from 'react-native';
import {
  setCustomView,
  setCustomTextInput,
  setCustomText,
  setCustomImage,
  setCustomTouchableOpacity,
} from 'react-native-global-props';

import Onboarding from './src/views/Onboarding/Onboarding';

const App = () => {

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const customViewProps = {
    style: {
      backgroundColor: '#FDFFFD',
    },
  };

  const customTextInputProps = {
    underlineColorAndroid: 'rgba(0,0,0,0)',
  };

  const customTextProps = {
    style: {
      fontFamily: 'PT Sans',
    },
  };

  const customImageProps = {
    resizeMode: 'cover',
  };

  const customTouchableOpacityProps = {
    hitSlop: {top: 15, right: 15, left: 15, bottom: 15},
  };

  setCustomView(customViewProps);
  setCustomTextInput(customTextInputProps);
  setCustomText(customTextProps);
  setCustomImage(customImageProps);
  setCustomTouchableOpacity(customTouchableOpacityProps);

  
  return (
    <SafeAreaView style={{height: height}}>
        <Onboarding />
    </SafeAreaView>
  );
};

export default App;
