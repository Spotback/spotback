import { StyleSheet, Dimensions } from 'react-native';
import { makeStyles } from 'react-native-elements';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const useStyles = makeStyles((theme: any) =>
  StyleSheet.create({
    hub: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.primary,
      width,
      height: 75,
      flexDirection: 'row',
    },
    profilePicImage: {
      marginTop: 20,
    },
    hubTitle: {
      color: theme.colors.light,
      fontSize: 24,
    },
    topHubSpacing: {
      marginTop: 40,
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
  })
);

export default useStyles;
