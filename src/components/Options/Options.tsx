import React, { FC } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { Button, Input } from '@components/index';
import useStyles from './Options.styles';
import { theme } from '@utils/theme';

interface OptionsProps {
  type: string;
  onPressLeft?: any;
  leftButtonColor?: string;
  leftButtonTitle?: string;
  onPressRight?: any;
  rightButtonColor?: string;
  rightButtonTitle?: string;
}

const Options: FC<OptionsProps> = ({
  type,
  onPressLeft,
  leftButtonColor,
  leftButtonTitle,
  onPressRight,
  rightButtonColor,
  rightButtonTitle,
}) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formFields: Record<string, any>) => {};

  return (
    <>
      {type === 'cancelTransaction' && (
        <View style={styles.cancelContainer}>
          <Text style={styles.text}>If you cancel during this transaction a fee may apply.</Text>
          <Text style={styles.bottomText}>Are you sure you want to cancel?</Text>
        </View>
      )}
      {type === 'spotSwitchComplete' && (
        <View style={styles.completeContainer}>
          <Text style={styles.text}>Are you sure this spot exchange is complete?</Text>
        </View>
      )}
      {type === 'comments' && (
        <View style={styles.commentsContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.commentsText}
                placeholder="Comments? (Required)"
                multiline={true}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="email"
            defaultValue=""
          />
        </View>
      )}
      <View style={styles.options}>
        <Button
          title={leftButtonTitle ? leftButtonTitle : 'Yes'}
          size="medium"
          titleColor={leftButtonColor ? leftButtonColor : theme.colors.light}
          onPress={onPressLeft}
        />
        {/* @TODO: Issue from height and width in options */}
        <View style={{ marginLeft: 1, marginRight: 1 }} />

        <Button
          title={rightButtonTitle ? rightButtonTitle : 'No'}
          size="medium"
          titleColor={rightButtonColor ? rightButtonColor : theme.colors.light}
          onPress={onPressRight}
        />
      </View>
    </>
  );
};

export default Options;
