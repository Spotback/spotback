import React, {useRef, useEffect} from 'react';
import {Animated, Text, View, Image, Easing} from 'react-native';
import styles from './Loader.styles';
import {LogBox} from 'react-native';

const FadeInView = (props) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 3000,
          easing: Easing.linear,
        }),
        Animated.delay(3000),
      ]),
      {
        iterations: 1000,
      },
    ).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

export default () => {
  return (
    <View style={styles.container}>
      <FadeInView>
        <Image
          style={styles.image}
          source={require('../../images/spotbackLogoFull.png')}
        />
      </FadeInView>
    </View>
  );
};
