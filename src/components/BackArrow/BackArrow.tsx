import React, { FC } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './BackArrow.styles';

interface BackArrowProps {
  navigationDirection: string;
}

const BackArrow: FC<BackArrowProps> = ({ navigationDirection }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
      onPress={() => navigation.navigate(navigationDirection)}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../images/backArrow.png')}
        />
      </View>
    </TouchableOpacity>
  );
};

export default BackArrow;
