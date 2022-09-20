/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from '@components/index';
import { clearUserError } from '@services/thunks';
import React, { FC } from 'react';
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import useStyles from './ErrorAlert.styles';

const ErrorAlert: FC = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const userError = useSelector((state: RootStateOrAny) => state.userReducer.error);
  // const spotsError = useSelector((state: RootStateOrAny) => state.spotsReducer.error);

  const onClearError = () => {
    dispatch(clearUserError());
  };

  return (
    <Modal isVisible={Object.keys(userError).length > 0} backdropOpacity={0.5}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.text}>{userError?.message}</Text>
          <Button onPress={onClearError} size="small" title="OK">
            <Text>OK</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default ErrorAlert;
