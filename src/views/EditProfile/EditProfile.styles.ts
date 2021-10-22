import { StyleSheet } from 'react-native';
import { makeStyles } from 'react-native-elements';

const useStyles = makeStyles((theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: theme.colors.background,
    },
    image: {
      height: 40,
      width: 40,
    },
    profilePicContainer: {
      position: 'relative',
      padding: 10,
    },
    editText: {
      fontSize: 24,
      color: theme.colors.light,
      top: 35,
      left: 30,
      position: 'absolute',
      zIndex: 1,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 10,
    },
    dropDown: {
      color: theme.colors.dark,
      width: 150,
      height: 35,
    },
    centerContainer: {
      alignItems: 'flex-end',
    },
    subText: {
      color: theme.colors.dark,
      fontFamily: 'PT Sans',
      fontSize: 20,
      paddingRight: 50,
    },
    sizeSubText: {
      color: theme.colors.dark,
      fontFamily: 'PT Sans',
      fontSize: 20,
      paddingRight: 50,
      marginTop: 10,
    },
    itemContainer: {
      padding: 2,
      flexDirection: 'row',
    },
    buttonContainer: {
      bottom: 30,
      position: 'absolute',
    },
    bottom: {
      flex: 1,
      justifyContent: 'flex-end',
      marginTop: 100,
      alignItems: 'center',
    },
  })
);

export default useStyles;
