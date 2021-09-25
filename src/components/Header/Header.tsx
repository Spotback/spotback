import React, { FC } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import useStyles from './Header.styles';
import { theme } from '@utils/theme';

interface HeaderProps {
  title: string;
  imageSource?: any;
  balance?: number;
  onPress: any;
  flip?: boolean;
  radius?: boolean;
}
const Header: FC<HeaderProps> = ({ title, imageSource, balance, onPress, flip, radius }) => {
  console.log('imagesource ', imageSource);
  const styles = useStyles();
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
          {imageSource === '' || undefined ? (
            <Icon
              name="user-circle-o"
              type="font-awesome"
              size={55}
              containerStyle={styles.noProfilePicImage}
              backgroundColor={theme.colors.shadow}
            />
          ) : (
            <Image style={styles.profilePicImage} source={{ uri: imageSource }} />
          )}
          <Text style={styles.headerTitle}>{title}</Text>
          <Text style={styles.balance}>{`$${balance}`}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Header;
