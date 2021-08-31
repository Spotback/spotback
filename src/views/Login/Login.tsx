import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { logIn } from '../../redux/services/users/actions';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Link from '../../components/Link/Link';
import styles from './Login.styles';

const Login = () => {
  const dispatch = useDispatch();
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
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder={errors.email ? 'This is required.' : 'Your Email'}
            inputStyle="long"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
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
                placeholder={errors.password ? 'This is required.' : 'Password'}
                inputStyle="short"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="password"
          defaultValue=""
        />
        <View style={styles.link}>
          <Link linkText="Forgot Password" />
        </View>
      </View>
      <View style={styles.button}>
        <Button title="Log In" size="large" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

export default Login;
