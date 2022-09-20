import { backArrow } from '@assets/images/index';
import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import useStyles from './BackArrow.styles';

interface BackArrowProps {
  navigationDirection: string | any;
}

const BackArrow: FC<BackArrowProps> = ({ navigationDirection }) => {
  const styles = useStyles();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      hitSlop={{
        top: 20,
        bottom: 20,
        left: 50,
        right: 50,
      }}
      onPress={() => navigation.navigate(navigationDirection)}>
      <View style={styles.container}>
        <Image style={styles.image} source={backArrow} />
      </View>
    </TouchableOpacity>
  );
};

export default BackArrow;
