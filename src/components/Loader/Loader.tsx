import React, { FC, useRef, useEffect } from 'react';
import { Animated, View, Image, Easing } from 'react-native';
import useStyles from './Loader.styles';
import { LogBox } from 'react-native';
import { useSelector, RootStateOrAny } from 'react-redux';
import { spotbackLogoFull } from '@assets/images/index';

const Loader: FC = () => {
  const styles = useStyles();
  const user = useSelector((state: RootStateOrAny) => state.userReducer);
  const animatedValue = new Animated.Value(0);

  const bounce = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.8, 1.2, 0.8],
  });

  const animate = () => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(() => animate());
  };

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    animate();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{ scale: bounce }],
        }}>
        <Image style={styles.image} source={spotbackLogoFull} />
      </Animated.View>
    </View>
  );
};

export default Loader;
