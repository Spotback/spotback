import React from 'react';

import {SafeAreaView, Dimensions} from 'react-native';

import StackNavigator from './src/components/Navigation/StackNavigator';

const App = () => {
  
  const height = Dimensions.get('window').height;

  return (
    <SafeAreaView style={{ height: height}}>
      <StackNavigator />
    </SafeAreaView>
  );
};

export default App;
