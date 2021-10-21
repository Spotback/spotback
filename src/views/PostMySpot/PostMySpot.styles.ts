import { StyleSheet } from 'react-native';
import { makeStyles } from 'react-native-elements';

const useStyles = makeStyles((theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
    },
    centerContainer: {
      padding: 20,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.primary,
      width: 352,
      height: 161,
      borderRadius: 10,
      elevation: 5,
      marginBottom: 5,
    },
    subContainer: {
      flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    picker: {
      flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    dropDown: {
      color: theme.colors.light,
      width: 160,
    },
    titleContainer: {
      position: 'absolute',
      top: -5,
      alignItems: 'center',
      textAlign: 'center',
    },
    titleText: {
      color: theme.colors.dark,
      fontFamily: 'PT Sans',
      fontWeight: 'bold',
      fontSize: 24,
    },
    subText: {
      color: theme.colors.light,
      fontFamily: 'PT Sans',
      fontSize: 20,
      // flex: 1,
      // flexWrap: 'wrap',
    },
    buttonsContainer: {
      marginTop: 20,
    },
  })
);

export default useStyles;
