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
    centerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: 315,
      marginTop: 10,
    },
    link: {
      height: 50,
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
    button: {
      margin: 30,
    },
  })
);

export default useStyles;
