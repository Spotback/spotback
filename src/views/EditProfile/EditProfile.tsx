import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { useSelector, RootStateOrAny } from 'react-redux';
import { useDispatch } from 'react-redux';
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import { useForm, Controller } from 'react-hook-form';
import { Button, Input } from '@components/index';
import { editProfile, profilePic } from '@assets/images/index';
import { Icon } from 'react-native-elements';
import useStyles from './EditProfile.styles';
import { theme } from '@utils/theme';

const EditProfile = () => {
  const styles = useStyles();
  const user = useSelector((state: RootStateOrAny) => state.userReducer);
  console.log('userSelector ', user);
  const [imageSource, setImageSource] = useState('');

  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getProfilePic = () => {
    storage()
      .ref(`users/profile_images/${user.email.replace('@', '_').replace('.', '_')}.png`)
      .getDownloadURL()
      .then((url: string) => {
        url ? setImageSource(url) : setImageSource('');
      })
      .catch((e) => console.log('getting downloadURL of image error => ', e));
  };

  useEffect(() => {
    getProfilePic();
  });

  const uploadProfilePic = () => {
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
        Alert.alert('You did not select any image');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const image = response.assets[0].uri;
        setImageSource(image);
        console.log('the uri ', image);
        storage()
          .ref(`users/profile_images/${user.email.replace('@', '_').replace('.', '_')}.png`)
          .putFile(image)
          .then(() => {
            console.log(`${image} has been successfully uploaded.`);
          })
          .catch((e) => console.log('uploading image error => ', e));
      }
    });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={editProfile} />
      <View style={styles.proflePicContainer}>
        <TouchableOpacity onPress={uploadProfilePic}>
          <Text style={styles.editText}>Edit</Text>
          {imageSource === '' ? (
            <Icon
              name="user-circle-o"
              type="font-awesome"
              size={100}
              containerStyle={styles.noProfilePicImage}
              backgroundColor={theme.colors.shadow}
            />
          ) : (
            <Image style={styles.profilePicImage} source={{ uri: imageSource }} />
          )}
        </TouchableOpacity>
      </View>

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
