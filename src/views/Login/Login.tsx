import { hidePassword, showPassword } from '@assets/images/index';
import { Button, ErrorAlert, Input, Link, Spinner } from '@components/index';
import { logIn } from '@services/thunks';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import useStyles from './Login.styles';

const Login = () => {
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
    const { email, password } = formFields;
    dispatch(logIn(email, password));
  };

  const showPasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
    passwordVisible ? setEyeIcon(hidePassword) : setEyeIcon(showPassword);
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder={errors.email ? 'This is required.' : 'Your Email'}
                inputStyle="large"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
              />
            )}
            name="email"
            defaultValue=""
          />
        </View>
        <View style={styles.centerContainer}>
          <View>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
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
              )}
              name="password"
              defaultValue=""
            />
          </View>
          <View style={styles.link}>
            <Link linkText="Forgot Password" />
          </View>
        </View>
        <View style={styles.button}>
          <Button title="Log In" size="large" onPress={handleSubmit(onSubmit)} />
        </View>
        <Spinner />
        <ErrorAlert />
      </View>
    </>
  );
};

export default Login;
