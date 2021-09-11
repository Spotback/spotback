import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { useSelector, RootStateOrAny } from 'react-redux';
import { useDispatch } from 'react-redux';
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import { useForm, Controller } from 'react-hook-form';
import { Button, Input } from '@components/index';
import { editProfile, profilePic } from '@assets/images/index';
import useStyles from './EditProfile.styles';

const EditProfile = () => {
  const styles = useStyles();
  const user = useSelector((state: RootStateOrAny) => state.userReducer);
  console.log('userSelector ', user);
  const [imageSource, setImageSource] = useState({});

  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const selectImage = () => {
    const options: any = {
      title: 'Pick a new profile pick',
      maxWidth: 256,
      maxHeight: 256,
      noData: true,
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true,
      },
    };

    launchImageLibrary(options, (response: any) => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
        Alert.alert('You did not select any image');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const image = response.assets[0].uri;
        setImageSource(image);
        console.log('the uri ', image);
        storage()
          .ref(`users/profile_images/${user.email.replace('@', '_').replace('.', '_')}.png`)
          .putFile(image)
          .then((snapshot) => {
            console.log(`${image} has been successfully uploaded.`);
          })
          .catch((e) => console.log('uploading image error => ', e));
      }
    });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={editProfile} />
      <TouchableOpacity onPress={selectImage}>
        <Image style={styles.profilePicImage} source={profilePic} />
      </TouchableOpacity>

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
