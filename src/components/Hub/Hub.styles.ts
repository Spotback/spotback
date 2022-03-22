import { StyleSheet, Dimensions } from 'react-native';
import { makeStyles } from 'react-native-elements';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const useStyles = makeStyles((theme: any) =>
  StyleSheet.create({
    // generic
    hub: {
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
    hubTitle: {
      color: theme.colors.light,
      fontSize: 24,
    },
    topHubSpacing: {
      marginHorizontal: 40,
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
      marginTop: 40,
      marginHorizontal: 20,
    },
    hostTitleSpacing: {
      marginLeft: 80,
    },
  })
);

export default useStyles;
