import React from 'react';
import { Text, View, TextInput, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import styles from './Signup.styles';

const Signup = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log('data', data);

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
                placeholder={errors.firstName ? 'This is required.' : 'First Name'}
                inputStyle="short"
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
                inputStyle="short"
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
                placeholder={errors.phoneNumber ? 'This is required.' : 'Phone Number'}
                inputStyle="short"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="phoneNumber"
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
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.input}>
              <Input
                placeholder={errors.referralCode ? 'This is required.' : 'Referral Code'}
                inputStyle="long"
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
    </View>
  );
};

export default Signup;
