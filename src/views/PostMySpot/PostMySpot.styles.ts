import { StyleSheet } from 'react-native';
import { makeStyles } from 'react-native-elements';

const useStyles = makeStyles((theme: any) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: theme.colors.background,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    centerContainer: {
      backgroundColor: theme.colors.primary,
      width: 352,
      height: 200,
      borderRadius: 10,
      elevation: 5,
      marginTop: 30,
    },
    subContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainText: {
      color: theme.colors.dark,
      fontSize: 24,
    },
    titleContainer: {
      alignItems: 'center',
      textAlign: 'center',
    },
    titleText: {
      color: theme.colors.dark,
      fontWeight: 'bold',
      fontSize: 24,
    },
    subText: {
      color: theme.colors.light,
      fontSize: 20,
    },
    buttonsContainer: {
      marginTop: 30,
    },
  })
);

export default useStyles;
