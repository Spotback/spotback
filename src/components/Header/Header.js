import React from 'react';

import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './Header.styles';

const Header = ({title, profilePic, balance, flip}) => {
  return (
    <TouchableOpacity>
      {flip === true ? (
        <View style={styles.footer}>
          <View style={styles.footerLine}>
            <Text style={styles.footerTitle}>{title}</Text>
          </View>
        </View>
      ) : (
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
