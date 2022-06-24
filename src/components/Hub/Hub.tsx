import React, { FC } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
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
          {top && (
            <SafeAreaView style={styles.topHub}>
              <View style={styles.topHubSpacing}>
                <View style={styles.hubPicture}>
                  <ProfilePic imageSource={imageSource} size="small" />
                </View>
              </View>
              <View style={styles.topHubSpacing}>
                <Text style={styles.hubTitle}>{title}</Text>
              </View>
              <View style={styles.topHubSpacing}>
                <Text style={styles.hubTitle}>{`$${balance}`}</Text>
              </View>
            </SafeAreaView>
          )}
          {bottom && (
            <SafeAreaView style={styles.bottomHub}>
              <View style={styles.footerLine}>
                <Text style={styles.hubTitle}>{title}</Text>
              </View>
            </SafeAreaView>
          )}
          {host && (
            <SafeAreaView style={styles.topHub}>
              <View style={styles.hostTitleSpacing}>
                <Text style={styles.hubTitle}>{title}</Text>
              </View>
              <View style={styles.hostHubSpacing}>
                <View style={styles.HostClientprofilePicImage}>
                  <ProfilePic imageSource={imageSource} size="medium" />
                </View>
              </View>
            </SafeAreaView>
          )}
          {client && (
            <SafeAreaView style={styles.topHub}>
              <View style={styles.hostTitleSpacing}>
                <Text style={styles.hubTitle}>{title}</Text>
              </View>
              <View style={styles.hostHubSpacing}>
                <View style={styles.HostClientprofilePicImage}>
                  <ProfilePic imageSource={imageSource} size="medium" />
                </View>
              </View>
            </SafeAreaView>
          )}
        </TouchableOpacity>
      )}
    </>
  );
};

export default Hub;
