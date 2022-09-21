import { editProfile } from '@assets/images/index';
import { Button, ErrorAlert, Input, ProfilePic, Spinner } from '@components/index';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import { Picker } from '@react-native-picker/picker';
import { fetchCarPicture, triggerSpinner, update } from '@services/thunks';
import { theme } from '@utils/theme';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import useStyles from './EditProfile.styles';

const EditProfile = () => {
  const styles = useStyles();
  const user = useSelector((state: RootStateOrAny) => state.userReducer);
  const carPicUrlSelector = useSelector(
    (state: RootStateOrAny) => state.userReducer.car.carProfilePictureUrl
  );

  const [carImageSource, setCarImageSource] = useState(carPicUrlSelector);
  const [imageSource, setImageSource] = useState('');
  const [carType, setCarType] = useState(user.car.carType);
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (formFields: Record<string, any>) => {
    let { licencePlate, make, model, year, color } = formFields;

    licencePlate.length === 0 ? (licencePlate = user.car.licencePlate) : licencePlate;
    make.length === 0 ? (make = user.car.make) : make;
    model.length === 0 ? (model = user.car.model) : model;
    year.length === 0 ? (year = user.car.year) : year;
    color.length === 0 ? (color = user.car.color) : color;

    if (
      make !== user.car.make ||
      model !== user.car.model ||
      color !== user.car.color ||
      year !== user.car.year
    ) {
      dispatch(fetchCarPicture(make, model, color, year, user.email));
    }

    dispatch(update(user.bearer, licencePlate, make, model, year, color, carType));
  };

  const getProfilePic = () => {
    storage()
      .ref(`users/profile_images/${user.email.replace('@', '_').replace('.', '_')}.png`)
      .getDownloadURL()
      .then((url: string) => {
        url ? setImageSource(url) : setImageSource('');
      })
      .catch((e) => {
        setImageSource('');
        console.log('getting downloadURL of image error => ', e);
      });
  };

  const getCarProfilePic = () => {
    if (carPicUrlSelector === undefined || carPicUrlSelector === '') {
      const dbCarPictureRef = database().ref(
        `car_pictures_urls/${user.email.replace('@', '_').replace('.', '_')}/url`
      );
      dbCarPictureRef.orderByChild('url').on('value', (url) => {
        setCarImageSource(url.val());
      });
    }
  };

  useEffect(() => {
    getProfilePic();
  }, []);

  useEffect(() => {
    getCarProfilePic();
  }, []);

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
            dispatch(triggerSpinner());
            setTimeout(() => {
              Alert.alert('Your profile pic is saved');
            }, 2000);
          })
          .catch((e) => console.log('uploading image error => ', e));
      }
    });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={editProfile} />
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <View style={styles.profileImagesContainer}>
          <View style={styles.profilePicContainer}>
            <TouchableOpacity style={styles.profilePicContainer} onPress={uploadProfilePic}>
              <Text style={styles.editText}>Edit</Text>
              <ProfilePic imageSource={imageSource} size="large" blured />
            </TouchableOpacity>
          </View>
          <View style={styles.profilePicContainer}>
            <TouchableOpacity style={styles.profilePicContainer} onPress={uploadProfilePic}>
              <ProfilePic imageSource={carImageSource} size="large" blured />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.subText}>License Plate: </Text>
          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder={user.car.licencePlate}
                inputStyle="medium"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="licencePlate"
            defaultValue=""
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.subText}>Make: </Text>
          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder={user.car.make}
                inputStyle="medium"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="make"
            defaultValue=""
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.subText}>Model: </Text>
          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder={user.car.model}
                inputStyle="medium"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="model"
            defaultValue=""
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.subText}>Year: </Text>
          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder={user.car.year}
                inputStyle="medium"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="year"
            defaultValue=""
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.subText}>Color: </Text>
          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder={user.car.color}
                inputStyle="medium"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="color"
            defaultValue=""
          />
        </View>

        <View style={styles.subContainer}>
          <Text style={styles.pickerSubText}>Vehicle Size: </Text>
          <View style={styles.pickerContainer}>
            <Picker
              dropdownIconColor={theme.colors.dark}
              itemStyle={{
                color: theme.colors.dark,
                fontWeight: 'bold',
                fontSize: 20,
              }}
              style={{ color: theme.colors.dark }}
              mode="dropdown"
              selectedValue={carType}
              onValueChange={(itemValue, itemIndex) => setCarType(itemValue)}>
              <Picker.Item label="Small" value="small" />
              <Picker.Item label="Medium" value="medium" />
              <Picker.Item label="Large" value="large" />
            </Picker>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottom}>
        <View style={styles.buttonContainer}>
          <Button title="Save" size="large" onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
      <Spinner />
      <ErrorAlert />
    </View>
  );
};

export default EditProfile;
