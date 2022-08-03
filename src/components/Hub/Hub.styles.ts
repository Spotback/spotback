import { StyleSheet, Dimensions, Platform } from 'react-native';
import { makeStyles } from 'react-native-elements';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const useStyles = makeStyles((theme: any) =>
  StyleSheet.create({
    // generic
    topHub: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.primary,
      width,
      height: Platform.OS === 'ios' ? 90 : 75,
      flexDirection: 'row',
      zIndex: 1,
    },
    bottomHub: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.primary,
      width,
      height: 75,
      flexDirection: 'row',
      zIndex: 1,
    },
    HostClientprofilePicImage: {
      marginTop: 20,
    },
    hubPicture: {
      marginTop: 20,
    },
    hubTitle: {
      color: theme.colors.light,
      fontSize: 24,
    },
    topHubSpacing: {
      marginHorizontal: '8%',
    },
    itemContainer: {
      padding: 2,
      flexDirection: 'row',
    },
    footerLine: {
      alignSelf: 'flex-start',
      borderTopColor: 'white',
      borderTopWidth: 3,
      marginTop: 10,
    },
    // host
    hostHubSpacing: {
      marginTop: 20,
      marginHorizontal: 20,
    },
    hostTitleSpacing: {
      marginLeft: 80,
    },
  })
);

export default useStyles;
