/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';
import useStyles from './Spinner.styles';
import { theme } from '@utils/theme';

interface SpinnerProps {
  error?: Record<any, any>;
  onPress?: any;
}

const Spinner: FC<SpinnerProps> = ({ error, onPress }: any) => {
  const styles = useStyles();
  return (
    <Modal isVisible={true} backdropOpacity={0.7} avoidKeyboard hasBackdrop backdropColor='black'>
      <View style={styles.subContainer}>
        <ActivityIndicator size="large" color={theme.colors.success} />
        <Text style={styles.text}>Loading</Text>
      </View>
    </Modal>
  );
};

export default Spinner;
