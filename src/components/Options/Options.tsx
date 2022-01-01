import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { Button } from '@components/index';
import useStyles from './Options.styles';
import { theme } from '@utils/theme';

interface OptionsProps {
  type: string;
  onPressLeft?: any;
  onPressRight?: any;
}

const Options: FC<OptionsProps> = ({ type, onPressLeft, onPressRight }) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      {type === 'cancelTransaction' && (
        <>
          <View style={styles.subContainer}>
            <Text style={styles.text}>If you cancel during this transaction a fee may apply.</Text>
            <Text style={styles.text}>Are you sure you want to cancel?</Text>
          </View>
          <View style={styles.options}>
            <Button
              title="Yes"
              size="medium"
              titleColor={theme.colors.error}
              onPress={onPressLeft}
            />
            {/* @TODO: Issue from height and width in options */}
            <View style={{ marginLeft: 1, marginRight: 1 }} />

            <Button
              title="No"
              size="medium"
              titleColor={theme.colors.success}
              onPress={onPressRight}
            />
          </View>
        </>
      )}
      {type === 'spotSwitchComplete' && (
        <>
          <View style={styles.subContainer}>
            <Text style={styles.centerText}>Are you sure this spot exchange is complete?</Text>
          </View>
          <View style={styles.options}>
            <Button
              title="Yes"
              size="medium"
              titleColor={theme.colors.light}
              onPress={onPressRight}
            />
            {/* @TODO: Issue from height and width in options */}
            <View style={{ marginLeft: 1, marginRight: 1 }} />

            <Button
              title="No"
              size="medium"
              titleColor={theme.colors.light}
              onPress={onPressRight}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default Options;
