import React from 'react';
import {View, Text} from 'react-native';

import Header from '../../components/Header/Header';
import profilePic from '../../images/profilePic.png';
import Button from '../../components/Button/Button';

import styles from './Home.styles';

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <Header title="Account" profilePic={profilePic} balance={15} />
      <View style={styles.subContainer}>
        <View style={styles.buttonContainer}>
          <View style={styles.spacing}>
            <Button title="Find Me A Spot" />
          </View>
          <View style={styles.spacing}>
            <Button title="Post My Spot" />
          </View>
        </View>
      </View>
      <Header title="SpotNews" flip={true} />
    </View>
  );
};

export default Home;
