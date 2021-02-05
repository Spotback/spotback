import React from 'react';

import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './Header.styles';

const Header = ({title, profilePic, balance, onPress, flip, radius}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {flip && !radius && (
        <View style={styles.footer}>
          <View style={styles.footerLine}>
            <Text style={styles.footerTitle}>{title}</Text>
          </View>
        </View>
      )}
      {!flip && !radius && (
        <View style={styles.header}>
          <Image style={styles.profilePic} source={profilePic} />
          <Text style={styles.headerTitle}>{title}</Text>
          <Text style={styles.balance}>{`$${balance}`}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Header;
