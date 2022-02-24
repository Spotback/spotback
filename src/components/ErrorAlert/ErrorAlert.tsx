/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';
import { Button } from '@components/index';
import useStyles from './ErrorAlert.styles';

interface ErrorAlertProps {
  error: Record<any, any>;
  onPress: any;
}

const ErrorAlert: FC<ErrorAlertProps> = ({ error, onPress }: any) => {
  const styles = useStyles();
  return (
    <Modal isVisible={Object.keys(error).length > 0} backdropOpacity={0.5}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.text}>{error.message}</Text>
          <Button onPress={onPress} size="small" title="OK">
            <Text>OK</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default ErrorAlert;
