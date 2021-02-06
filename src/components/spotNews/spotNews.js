import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './SpotNews.styles';

const SpotNews = ({text, image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <Image style={styles.image} source={image} />
    </View>
  );
};

export default SpotNews;
