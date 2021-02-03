import React from 'react';

import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import styles from './Header.styles';

const Header = ({title, profilePic, balance}) => {
  return (
    <TouchableOpacity>
      <View style={styles.header}>
        <Image style={styles.profilePic} source={profilePic} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.balance}>{`$${balance}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Header;
