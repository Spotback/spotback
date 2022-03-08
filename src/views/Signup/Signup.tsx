import React from 'react';
import { useDispatch } from 'react-redux';
import { View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { signUp } from '@services/users/thunks';
import { Button, Input, ErrorAlert, Spinner } from '@components/index';
import useStyles from './Signup.styles';

const Signup = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formFields: Record<string, any>) => {
    const { email, firstName, lastName, password, phone } = formFields;
    dispatch(signUp(email, firstName, lastName, password, phone));
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
            inputStyle="large"
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
              />
            </View>
          )}
          name="password"
          defaultValue=""
        />
        <Controller
          control={control}
          rules={{
            required: false,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.input}>
              <Input
                placeholder={errors.referralCode ? 'This is required.' : 'Referral Code'}
                inputStyle="large"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="referralCode"
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
