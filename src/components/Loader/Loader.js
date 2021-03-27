import React, {useState} from 'react';
import {View, Image} from 'react-native';
import styles from './Loader.styles';

const Loader = () => {
  const [visible, setVisible] = useState(true);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../images/spotbackLogoFull.png')}
      />
    </View>
  );
};

export default Loader;
