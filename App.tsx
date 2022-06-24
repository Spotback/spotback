import React from 'react';
import { Provider } from 'react-redux';
import store from './src/services/redux/store';
import { ThemeProvider } from 'react-native-elements';
import { theme } from './src/utils/theme';
import StackNavigator from './src/navigation/StackNavigator';
import { StripeProvider } from '@stripe/stripe-react-native';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* <StripeProvider publishableKey="pk_test_q4RuLAlmlO8T8Y2u3jpQwvFZ00KoMvVudh"> */}
        <StackNavigator />
        {/* </StripeProvider> */}
      </ThemeProvider>
    </Provider>
  );
};

export default App;
