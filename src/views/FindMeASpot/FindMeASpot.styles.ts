import { StyleSheet } from 'react-native';
import { makeStyles } from 'react-native-elements';

const useStyles = makeStyles((theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
    },
    titleContainer: {
      position: 'absolute',
      top: -5,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
    },
    titleText: {
      color: theme.colors.dark,
      fontFamily: 'PT Sans',
      fontWeight: 'bold',
      fontSize: 24,
    },
    spacing: {
      marginHorizontal: 5,
    },
    buttonsContainer: {
      flexDirection: 'row',
      position: 'absolute',
      top: 120,
      width: 352,
    },
    centerContainer: {
      position: 'absolute',
      top: 180,
      padding: 5,
      margin: 5,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      backgroundColor: theme.colors.primary,
      width: 352,
      height: 246,
      borderRadius: 10,
      elevation: 5,
    },
  })
);

export default useStyles;
