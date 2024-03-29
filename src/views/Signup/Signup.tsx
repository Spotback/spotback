import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { hidePassword, showPassword } from '@assets/images/index';
import { Button, ErrorAlert, Input, Spinner } from '@components/index';
import { signUp } from '@services/thunks';
import useStyles from './Signup.styles';

const Signup = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [eyeIcon, setEyeIcon] = useState(showPassword);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formFields: Record<string, any>) => {
    const { email, firstName, lastName, password, phone } = formFields;
    dispatch(signUp(email, firstName, lastName, password, phone));
  };

  const showPasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
    passwordVisible ? setEyeIcon(hidePassword) : setEyeIcon(showPassword);
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.input}>
            <Input
              placeholder={errors.email ? 'This is required.' : 'Your Email'}
              inputStyle="large"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
            />
          </View>
        )}
        name="email"
        defaultValue=""
      />

      <View style={styles.centerContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.input}>
              <Input
                placeholder={errors.firstName ? 'This is required.' : 'First Name'}
                inputStyle="medium"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="firstName"
          defaultValue=""
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.input}>
              <Input
                placeholder={errors.lastName ? 'This is required.' : 'Last Name'}
                inputStyle="medium"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="lastName"
          defaultValue=""
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.input}>
              <Input
                placeholder={errors.phone ? 'This is required.' : 'Phone Number'}
                inputStyle="medium"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="phone"
          defaultValue=""
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.input}>
              <Input
                placeholder={errors.password ? 'This is required.' : 'Password'}
                inputStyle="medium"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
                isPasswordInput={true}
                hidePassword={passwordVisible}
                toggleEyeIcon={showPasswordToggle}
                eyeIconSource={eyeIcon}
              />
            </View>
          )}
          name="password"
          defaultValue=""
        />
        <View style={styles.button}>
          <Button title="Sign Up" size="large" onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
      <Spinner />
      <ErrorAlert />
    </View>
  );
};

export default Signup;
