import React from 'react';

import {SafeAreaView, View} from 'react-native';
import {Dimensions} from 'react-native';

import Onboarding from './src/views/Onboarding/Onboarding';

const App = () => {

  const width = Dimensions.get('window').width; //full width
  const height = Dimensions.get('window').height; //full height

  return (
    <SafeAreaView>
      <View style={{backgroundColor: '#FDFFFD', height: height}}>
        <Onboarding />
      </View>
    </SafeAreaView>
  );
};

export default App;
