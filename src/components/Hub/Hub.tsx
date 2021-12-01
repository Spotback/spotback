import React, { FC } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import useStyles from './Hub.styles';
import { ProfilePic } from '@components/index';

interface HubProps {
  title: string;
  imageSource?: any;
  balance?: number;
  onPress: any;
  top?: boolean;
  bottom?: boolean;
  host?: boolean;
  client?: boolean;
  hide?: boolean;
}
const Hub: FC<HubProps> = ({
  title,
  imageSource,
  balance,
  onPress,
  top,
  bottom,
  host,
  client,
  hide = false,
}) => {
  const styles = useStyles();
  return (
    <>
      {hide ? null : (
        <TouchableOpacity onPress={onPress}>
          <View style={styles.hub}>
            {top && (
              <>
                <View style={styles.topHubSpacing}>
                  <View style={styles.profilePicImage}>
                    <ProfilePic imageSource={imageSource} size="small" />
                  </View>
                </View>
                <View style={styles.topHubSpacing}>
                  <Text style={styles.hubTitle}>{title}</Text>
                </View>
                <View style={styles.topHubSpacing}>
                  <Text style={styles.hubTitle}>{`$${balance}`}</Text>
                </View>
              </>
            )}
            {bottom && (
              <>
                <View style={styles.footerLine}>
                  <Text style={styles.hubTitle}>{title}</Text>
                </View>
              </>
            )}
            {host && (
              <>
                <View style={styles.hostTitleSpacing}>
                  <Text style={styles.hubTitle}>{title}</Text>
                </View>
                <View style={styles.hostHubSpacing}>
                  <View style={styles.profilePicImage}>
                    <ProfilePic imageSource={imageSource} size="medium" />
                  </View>
                </View>
              </>
            )}
            {client && (
              <>
                <View style={styles.hostTitleSpacing}>
                  <Text style={styles.hubTitle}>{title}</Text>
                </View>
                <View style={styles.hostHubSpacing}>
                  <View style={styles.profilePicImage}>
                    <ProfilePic imageSource={imageSource} size="medium" />
                  </View>
                </View>
              </>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Hub;
