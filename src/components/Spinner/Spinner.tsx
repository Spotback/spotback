/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';
import useStyles from './Spinner.styles';
import { theme } from '@utils/theme';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';

const Spinner = () => {
  const styles = useStyles();
  const userSpinner = useSelector((state: RootStateOrAny) => state.userReducer.spinner);
  console.log('userspinner ', userSpinner);
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
