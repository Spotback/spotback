import { StyleSheet, Dimensions } from 'react-native';
import { makeStyles } from 'react-native-elements';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const useStyles = makeStyles((theme: any) =>
  StyleSheet.create({
    header: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.primary,
      width,
      height: 75,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    footer: {
      backgroundColor: theme.colors.primary,
      width,
      height: 75,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },
    profilePic: {
      position: 'absolute',
      left: 25,
      top: 40,
      width: 65,
      height: 65,
    },
    profilePicImage: {
      position: 'absolute',
      left: 25,
      top: 40,
      width: 65,
      height: 65,
      borderRadius: 50,
    },
    noProfilePicImage: {
      position: 'absolute',
      left: 25,
      top: 40,
      borderRadius: 50,
    },
    headerTitle: {
      color: theme.colors.light,
      fontSize: 24,
      marginTop: 80,
      left: 25,
    },
    footerLine: {
      alignSelf: 'flex-start',
      borderTopColor: 'white',
      borderTopWidth: 3,
    },
    footerTitle: {
      color: theme.colors.light,
      fontSize: 24,
      left: 0,
    },
    balance: {
      color: theme.colors.light,
      fontSize: 24,
      left: 120,
    },
  })
);

export default useStyles;
