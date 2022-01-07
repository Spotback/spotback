import { StyleSheet, Dimensions } from 'react-native';
import { makeStyles } from 'react-native-elements';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const useStyles = makeStyles((theme: any) =>
  StyleSheet.create({
    cancelContainer: {
      justifyContent: 'center',
      padding: 20,
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
    completeContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
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
    commentsContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 333,
      height: 112,
      padding: 10,
      marginVertical: 5,
      backgroundColor: theme.colors.light,
      borderColor: theme.colors.primary,
      borderWidth: 2,
      borderRadius: 10,
      elevation: 5,
    },
    text: {
      color: theme.colors.light,
      fontWeight: 'bold',
    },
    commentsText: {
      color: theme.colors.shadow,
    },
    bottomText: {
      color: theme.colors.light,
      fontWeight: 'bold',
      marginTop: 10,
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
