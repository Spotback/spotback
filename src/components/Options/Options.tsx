import { Button } from '@components/index';
import { theme } from '@utils/theme';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import useStyles from './Options.styles';

interface OptionsProps {
  type: string;
  onPressLeft?: any;
  leftButtonColor?: string;
  leftButtonTitle?: string;
  onPressRight?: any;
  rightButtonColor?: string;
  rightButtonTitle?: string;
  texts: any;
}

const Options: FC<OptionsProps> = ({
  type,
  onPressLeft,
  leftButtonColor,
  leftButtonTitle,
  onPressRight,
  rightButtonColor,
  rightButtonTitle,
  texts,
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
      {type === 'standard' && (
        <View style={styles.container}>
          {texts.map((text: string, index: number) => (
            <Text key={text} style={index === 0 ? styles.boldText: styles.text}>
              {text}
            </Text>
          ))}
        </View>
      )}
      {/* {type === 'input' && (
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputText}
                placeholder={texts[0]}
                multiline={true}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="inputText"
            defaultValue=""
          />
        </View>
      )} */}
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
