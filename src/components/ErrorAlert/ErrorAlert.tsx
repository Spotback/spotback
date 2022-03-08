/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';
import { Button } from '@components/index';
import useStyles from './ErrorAlert.styles';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { logIn, clearError } from '@services/users/thunks';

// interface ErrorAlertProps {
//   onPress: any;
// }

const ErrorAlert = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const userError = useSelector((state: RootStateOrAny) => state.userReducer.error);
  const spotsError = useSelector((state: RootStateOrAny) => state.spotsReducer.error);

  const onClearError = () => {
    dispatch(clearError());
  };

  return (
    <>
      <Modal
        isVisible={Object.keys(userError ? userError : spotsError).length > 0}
        backdropOpacity={0.5}>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Text style={styles.text}>
              {userError?.message ? userError?.message : spotsError?.message}
            </Text>
            <Button onPress={onClearError} size="small" title="OK">
              <Text>OK</Text>
            </Button>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ErrorAlert;
