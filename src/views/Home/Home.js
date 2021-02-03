import React from 'react';
import {View, Text} from 'react-native';

import Header from '../../components/Header/Header';
import profilePic from '../../images/profilePic.png';

import styles from './Home.styles';

const Home = () => {
  return (
    <View>
      <Header title="Account" profilePic={profilePic} balance={15} />
      <View style={styles.container}>
      </View>
    </View>
  );
};

export default Home;
