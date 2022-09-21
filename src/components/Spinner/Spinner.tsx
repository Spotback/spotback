/* eslint-disable @typescript-eslint/no-unused-vars */
import { theme } from '@utils/theme';
import React, { FC } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { RootStateOrAny, useSelector } from 'react-redux';
import useStyles from './Spinner.styles';

const Spinner: FC = () => {
  const styles = useStyles();
  const userSpinner = useSelector((state: RootStateOrAny) => state.userReducer.spinner);
  return (
    <Modal
      isVisible={userSpinner}
      backdropOpacity={0.7}
      avoidKeyboard
      hasBackdrop
      backdropColor="black">
      <View style={styles.subContainer}>
        <ActivityIndicator size="large" color={theme.colors.success} />
        <Text style={styles.text}>Loading</Text>
      </View>
    </Modal>
  );
};

export default Spinner;
