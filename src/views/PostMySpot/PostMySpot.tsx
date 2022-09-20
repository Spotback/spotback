import { Button, ErrorAlert, Spinner } from '@components/index';
import { Picker } from '@react-native-picker/picker';
import { postSpot } from '@services/thunks';
import { theme } from '@utils/theme';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import useStyles from './PostMySpot.styles';

const PostMySpot = ({ route: { params } }: Record<any, any>) => {
  const styles = useStyles();
  console.log('route params', params);
  const user = useSelector((state: RootStateOrAny) => state.userReducer);
  console.log('user pinned coords ', user.pinnedCoordinates);
  const dispatch = useDispatch();

  const [spotType, setSpotType] = useState('street');
  const [leaveTime, setLeaveTime] = useState(0);

  const onSubmit = () => {
    let coordinates: any = '';
    if (user.pinnedCoordinates == '') {
      coordinates = params.coordinates;
    } else {
      coordinates = user.pinnedCoordinates;
    }
    dispatch(postSpot(user.bearer, coordinates, user.car, spotType, leaveTime));
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>234 San Pedro Sq.</Text>
        <Text style={styles.titleText}>Recieve 5 points</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.mainText}>When will you get to your car?</Text>
        <View style={styles.pickerContainer}>
          <Picker
            dropdownIconColor={theme.colors.light}
            itemStyle={{ color: theme.colors.light, fontWeight: 'bold', fontSize: 24 }}
            style={{ color: theme.colors.light }}
            mode="dropdown"
            selectedValue={leaveTime}
            onValueChange={(itemValue, itemIndex) => setLeaveTime(itemValue)}>
            <Picker.Item label="Now" value={0} />
            <Picker.Item label="5 min" value={300000} />
            <Picker.Item label="10 min" value={600000} />
            <Picker.Item label="15 min" value={900000} />
          </Picker>
        </View>

        <View style={styles.buttonsContainer}>
          <Button title="Post Spot" size="large" onPress={onSubmit} />
        </View>
      </View>

      <Spinner />
      <ErrorAlert />
    </View>
  );
};

export default PostMySpot;
