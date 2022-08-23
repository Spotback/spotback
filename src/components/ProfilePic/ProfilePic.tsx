import React, { FC } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import useStyles from './ProfilePic.styles';
import { noProfilePic } from '@assets/images/index';

interface ProfilePicProps {
  imageSource?: any;
  size?: string;
  blured?: any;
}
const ProfilePic: FC<ProfilePicProps> = ({ imageSource, size, blured }) => {
  const styles = useStyles(blured)();
  return (
    <Image
      key={imageSource + Date.now()}
      style={size === 'small' ? styles.small : size === 'medium' ? styles.medium : styles.large}
      source={imageSource === '' || undefined ? noProfilePic : { uri: imageSource }}
    />
  );
};

export default ProfilePic;
