import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/services/redux/store';
import { ThemeProvider } from 'react-native-elements';
import { theme } from './src/utils/theme';
import StackNavigator from './src/navigation/StackNavigator';
import { PersistGate } from 'redux-persist/integration/react';
// import { StripeProvider } from '@stripe/stripe-react-native';

const App = () => {
  // console.disableYellowBox = true;
  // LogBox.ignoreAllLogs(disable)
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          {/* <StripeProvider publishableKey="pk_test_q4RuLAlmlO8T8Y2u3jpQwvFZ00KoMvVudh"> */}
          <StackNavigator />
          {/* </StripeProvider> */}
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
