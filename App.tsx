import React from 'react';
import { Provider } from 'react-redux';
import store from './src/services/redux/store';
import { ThemeProvider } from 'react-native-elements';
import { theme } from './src/utils/theme';
import StackNavigator from './src/navigation/StackNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StackNavigator />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
