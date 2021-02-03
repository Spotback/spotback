import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from './BackArrow.styles';

const BackArrow = ({navigationDirection}) => {

    const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(navigationDirection)}>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../images/backArrow.png')} />
      </View>
    </TouchableOpacity>
  );
};

export default BackArrow;
