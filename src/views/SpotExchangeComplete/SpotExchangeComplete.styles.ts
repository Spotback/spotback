import { StyleSheet } from 'react-native';
import { makeStyles } from 'react-native-elements';

const useStyles = makeStyles((theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: theme.colors.background,
    },

    text: {
      color: theme.colors.dark,
      fontFamily: 'PT Sans',
      //   margin: 10,
      fontSize: 20,
      fontWeight: 'bold',
      //   padding: 10,
    },
    titleText: {
      color: theme.colors.dark,
      fontFamily: 'PT Sans',
      fontWeight: 'bold',
      fontSize: 24,
    },
    starContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      margin: 5,
    },
    subText: {
      color: theme.colors.black,
      fontFamily: 'PT Sans',
      padding: 2,
      fontSize: 20,
    },
  })
);

export default useStyles;
