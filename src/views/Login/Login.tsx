import React from 'react';
import { View, Alert } from 'react-native';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { logIn } from '@services/thunks';
import { Button, Input, Link, ErrorAlert, Spinner } from '@components/index';
import useStyles from './Login.styles';

const Login = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state: RootStateOrAny) => state.userReducer);
  console.log('user error ', user?.error);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formFields: Record<string, any>) => {
    const { email, password } = formFields;
    dispatch(logIn(email, password));
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
