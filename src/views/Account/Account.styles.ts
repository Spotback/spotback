import { StyleSheet } from 'react-native';
import { makeStyles } from 'react-native-elements';

const useStyles = makeStyles((theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      // alignItems: 'center',
      backgroundColor: theme.colors.background,
    },
    subContainer: {
      // flex: 1,
      alignItems: 'center',
      // backgroundColor: theme.colors.background,
    },
    titleText: {
      color: theme.colors.dark,

      fontWeight: 'bold',
      fontSize: 24,
    },
    centerContainer: {
      width: 310,
      height: 150,
      padding: 10,
      marginVertical: 5,
      alignItems: 'center',
      backgroundColor: theme.colors.light,
      borderColor: theme.colors.primary,
      borderWidth: 4,
      borderRadius: 10,
      elevation: 5,
    },
    starContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      margin: 10,
    },
    subText: {
      color: theme.colors.black,
      padding: 2,
      fontSize: 20,
    },
    scrollContainer: {
      marginLeft: 50,
      marginTop: 20,
    },
    iconContainer: {
      alignItems: 'center',
      flexDirection: 'row',

      marginVertical: 20,
    },
    text: {
      fontSize: 20,
      padding: 10,
    },
    image: {
      height: 40,
      width: 40,
    },
  })
);

export default useStyles;
