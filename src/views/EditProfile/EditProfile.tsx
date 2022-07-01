import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, ScrollView, Dimensions } from 'react-native';
import { useSelector, RootStateOrAny } from 'react-redux';
import { useDispatch } from 'react-redux';
import { update } from '@services/thunks';
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import { Picker } from '@react-native-picker/picker';
import { useForm, Controller } from 'react-hook-form';
import { Button, Input, ProfilePic, ErrorAlert, Spinner } from '@components/index';
import { editProfile, noProfilePic } from '@assets/images/index';
import useStyles from './EditProfile.styles';
import { theme } from '@utils/theme';

const EditProfile = () => {
  const styles = useStyles();
  const user = useSelector((state: RootStateOrAny) => state.userReducer);
  console.log('user ', user.car.licencePlate);
  const [imageSource, setImageSource] = useState('');
  const [make, setMake] = useState(user.car.make);
  const [model, setModel] = useState(user.car.model);
  const [year, setYear] = useState(user.car.year);
  const [color, setColor] = useState(user.car.color);
  const [carType, setCarType] = useState(user.car.carType);
  console.log('state', make, model, year, color, carType);
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (formFields: Record<string, any>) => {
    const { licencePlate } = formFields;
    console.log('onSumbit ', licencePlate, make, model, year, color, carType);
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
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <View style={styles.profilePicContainer}>
          <TouchableOpacity onPress={uploadProfilePic}>
            <Text style={styles.editText}>Edit</Text>
            <ProfilePic imageSource={imageSource} size="large" blured />
          </TouchableOpacity>
        </View>

        <View style={styles.licenseContainer}>
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

        <Text style={styles.pickerSubText}>Make:</Text>
        <View style={styles.subContainer}>
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
              selectedValue={make}
              onValueChange={(itemValue, itemIndex) => setMake(itemValue)}>
              <Picker.Item label="Audi" value="audi" />
              <Picker.Item label="BMW" value="bmw" />
              <Picker.Item label="Mercedez" value="mercedez" />
              <Picker.Item label="Ford" value="ford" />
              <Picker.Item label="Chevy" value="chevy" />
              <Picker.Item label="Honda" value="honda" />
            </Picker>
          </View>
        </View>
        <Text style={styles.pickerSubText}>Model:</Text>
        <View style={styles.subContainer}>
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
              selectedValue={model}
              onValueChange={(itemValue, itemIndex) => setModel(itemValue)}>
              <Picker.Item label="1 series" value="1 series" />
              <Picker.Item label="2 series" value="2 series" />
              <Picker.Item label="3 series" value="3 series" />
              <Picker.Item label="4 series" value="4 series" />
              <Picker.Item label="Raptor" value="raptor" />
              <Picker.Item label="Tahoe" value="tahoe" />
            </Picker>
          </View>
        </View>
        <Text style={styles.pickerSubText}>Year: </Text>
        <View style={styles.subContainer}>
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
              selectedValue={year}
              onValueChange={(itemValue, itemIndex) => setYear(itemValue)}>
              <Picker.Item label="2021" value="2021" />
              <Picker.Item label="2020" value="2020" />
              <Picker.Item label="2019" value="2019" />
              <Picker.Item label="2018" value="2018" />
              <Picker.Item label="2017" value="2018" />
              <Picker.Item label="2016" value="2016" />
            </Picker>
          </View>
        </View>
        <Text style={styles.pickerSubText}>Color: </Text>
        <View style={styles.subContainer}>
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
              selectedValue={color}
              onValueChange={(itemValue, itemIndex) => setColor(itemValue)}>
              <Picker.Item label="red" value="red" />
              <Picker.Item label="black" value="black" />
              <Picker.Item label="white" value="white" />
              <Picker.Item label="blue" value="blue" />
            </Picker>
          </View>
        </View>
        <Text style={styles.pickerSubText}>Vehicle Size: </Text>
        <View style={styles.subContainer}>
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
