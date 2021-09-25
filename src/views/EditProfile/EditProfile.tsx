import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { useSelector, RootStateOrAny } from 'react-redux';
import { useDispatch } from 'react-redux';
import { update } from '@redux/services/users/actions';
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import { Picker } from '@react-native-picker/picker';
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
  const [where, setWhere] = useState('');
  const [when, setWhen] = useState('');

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

  const onSubmit = (formFields: Record<string, any>) => {
    const { carType, color, make, model, year, email } = formFields;
    dispatch(update(carType, color, make, model, year, email));
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
                inputStyle="mini"
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
                inputStyle="mini"
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
          <View style={styles.picker}>
            <Picker
              dropdownIconColor={theme.colors.dark}
              style={styles.dropDown}
              selectedValue={where}
              onValueChange={(itemValue, itemIndex) => setWhere(itemValue)}>
              <Picker.Item label="Street" value="street" />
              <Picker.Item label="Parking Lot" value="parking" />
              <Picker.Item label="Driveway" value="driveway" />
              <Picker.Item label="EV Spot" value="ev" />
            </Picker>
          </View>
          {/* <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder={errors.vehicleMake ? 'This is required.' : ''}
                inputStyle="mini"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="vehicleMake"
            defaultValue=""
          /> */}
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.subText}>Vehicle Size: </Text>
          <View style={styles.picker}>
            <Picker
              dropdownIconColor={theme.colors.dark}
              style={styles.dropDown}
              selectedValue={when}
              onValueChange={(itemValue, itemIndex) => setWhen(itemValue)}>
              <Picker.Item label="Now" value="now" />
              <Picker.Item label="5 min" value="5" />
              <Picker.Item label="10 min" value="10" />
              <Picker.Item label="15 min" value="15" />
            </Picker>
          </View>
          {/* <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder={errors.vehicleSize ? 'This is required.' : ''}
                inputStyle="mini"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="vehicleSize"
            defaultValue=""
          /> */}
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.buttonContainer}>
          <Button title="Save" size="large" />
        </View>
      </View>
    </View>
  );
};

export default EditProfile;
