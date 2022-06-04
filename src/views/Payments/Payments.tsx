import React, { useState } from 'react';
import { View, Text } from 'react-native';
import useStyles from './Payments.styles';
// import { CardField, CardFieldInput, useStripe } from '@stripe/stripe-react-native';

const Payments = () => {
  const styles = useStyles();
  // const [card, setCard] = useState(CardFieldInput.ValidationState);
  // const { confirmPayment, handleCardAction } = useStripe();
  return (
    <View style={styles.container}>
      {/* <CardField
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
      /> */}
    </View>
  );
};

export default Payments;
