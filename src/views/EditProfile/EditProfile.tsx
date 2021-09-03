import React from 'react';
import { View, Text, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { Button, Input } from '@components/index';
import { editProfile, profilePic } from '@assets/images/index';
import useStyles from './EditProfile.styles';

const EditProfile = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={editProfile} />
      <Image style={styles.profilePicImage} source={profilePic} />
      <View style={styles.centerContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.subText}>Email: </Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder={errors.email ? 'This is required.' : ''}
                inputStyle="small"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="email"
            defaultValue=""
          />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.subText}>License Plate: </Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder={errors.licencePlate ? 'This is required.' : ''}
                inputStyle="small"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="licencePlate"
            defaultValue=""
          />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.subText}>Vehicle Make: </Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder={errors.vehicleMake ? 'This is required.' : ''}
                inputStyle="small"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="vehicleMake"
            defaultValue=""
          />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.subText}>Vehicle Size: </Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder={errors.vehicleSize ? 'This is required.' : ''}
                inputStyle="small"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="vehicleSize"
            defaultValue=""
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Save" size="large" />
      </View>
    </View>
  );
};

export default EditProfile;
