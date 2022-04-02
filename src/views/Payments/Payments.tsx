import React, { useState } from 'react';
import { View, Text } from 'react-native';
import store from './src/services/redux/store';
import { ThemeProvider } from 'react-native-elements';
import { theme } from './src/utils/theme';
import StackNavigator from './src/navigation/StackNavigator';
import { StripeProvider, CardField, CardFieldInput, useStripe } from '@stripe/stripe-react-native';

const Payments = () => {
  const [card, setCard] = useState(CardFieldInput.Details | null);
  const { confirmPayment, handleCardAction } = useStripe();
  return (
    <View>
      <Text>stripe</Text>
      <CardField
        postalCodeEnabled={true}
        placeholder={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30,
        }}
        onCardChange={(cardDetails: any) => {
          setCard(cardDetails);
        }}
        onFocus={(focusedField) => {
          console.log('focusField', focusedField);
        }}
      />
    </View>
  );
};

export default Payments;
