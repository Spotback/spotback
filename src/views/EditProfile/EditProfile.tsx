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
  const [imageSource, setImageSource] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (formFields: Record<string, any>) => {
    console.log('onSumbit ', formFields, make, model, year, color, size);
    // dispatch(update(carType, color, make, model, year, email));
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
      <View style={styles.proflePicContainer}>
        <TouchableOpacity onPress={uploadProfilePic}>
          <Text style={styles.editText}>Edit</Text>
          {imageSource === '' || undefined ? (
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
          <Text style={styles.subText}>License Plate: </Text>
          <Controller
            control={control}
            rules={{
              required: false,
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
          <Text style={styles.sizeSubText}>Make: </Text>

          <Picker
            dropdownIconColor={theme.colors.dark}
            style={styles.dropDown}
            selectedValue={make}
            onValueChange={(itemValue, itemIndex) => setMake(itemValue)}>
            <Picker.Item label="Audi" value="audi" />
            <Picker.Item label="BMW" value="bmw" />
            <Picker.Item label="Mercedez" value="mercedez" />
            <Picker.Item label="Ford" value="ford" />
          </Picker>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.sizeSubText}>Model: </Text>
          <Picker
            dropdownIconColor={theme.colors.dark}
            style={styles.dropDown}
            selectedValue={model}
            onValueChange={(itemValue, itemIndex) => setModel(itemValue)}>
            <Picker.Item label="1 series" value="1 series" />
            <Picker.Item label="2 series" value="2 series" />
            <Picker.Item label="3 series" value="3 series" />
            <Picker.Item label="4 series" value="4 series" />
          </Picker>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.sizeSubText}>Year: </Text>
          <Picker
            dropdownIconColor={theme.colors.dark}
            style={styles.dropDown}
            selectedValue={year}
            onValueChange={(itemValue, itemIndex) => setYear(itemValue)}>
            <Picker.Item label="2021" value="2021" />
            <Picker.Item label="2020" value="2020" />
            <Picker.Item label="2019" value="2019" />
            <Picker.Item label="2018" value="2018" />
          </Picker>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.sizeSubText}>Color: </Text>
          <Picker
            dropdownIconColor={theme.colors.dark}
            style={styles.dropDown}
            selectedValue={color}
            onValueChange={(itemValue, itemIndex) => setColor(itemValue)}>
            <Picker.Item label="red" value="red" />
            <Picker.Item label="black" value="black" />
            <Picker.Item label="white" value="white" />
            <Picker.Item label="blue" value="blue" />
          </Picker>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.sizeSubText}>Vehicle Size: </Text>
          <View style={styles.picker}>
            <Picker
              dropdownIconColor={theme.colors.dark}
              style={styles.dropDown}
              selectedValue={size}
              onValueChange={(itemValue, itemIndex) => setSize(itemValue)}>
              <Picker.Item label="Small" value="small" />
              <Picker.Item label="Midsized" value="medium" />
              <Picker.Item label="Large" value="large" />
            </Picker>
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.buttonContainer}>
          <Button title="Save" size="large" onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
    </View>
  );
};

export default EditProfile;
