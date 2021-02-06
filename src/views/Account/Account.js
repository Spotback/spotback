import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './Account.styles';

const Account = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Account</Text>
      </View>
      <View style={styles.centerContainer}>
        <View>
        <Text style={styles.titleText}>Walter White</Text>
        </View>
      </View>
    </View>
  );
};

export default Account;
