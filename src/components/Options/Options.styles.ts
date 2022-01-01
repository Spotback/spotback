import { StyleSheet, Dimensions } from 'react-native';
import { makeStyles } from 'react-native-elements';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const useStyles = makeStyles((theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 400,
    },
    subContainer: {
      width: 333,
      height: 112,
      backgroundColor: theme.colors.primary,
      borderRadius: 15,
      elevation: 5,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
      marginTop: 15,
      marginLeft: 15,
    },
    centerText: {
      // @TODO: fix centering
      color: 'white',
      fontWeight: 'bold',
      marginTop: 45,
      marginLeft: 15,
    },
    options: {
      flexDirection: 'row',
      // @TODO: height and width affecting buttons height and width, strange issue.
      height: 60,
      width: 333,
      marginTop: 2,
    },
    buttonSpacing: {
      marginHorizontal: 1,
    },
  })
);

export default useStyles;
