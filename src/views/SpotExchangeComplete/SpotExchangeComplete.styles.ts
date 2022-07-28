import { StyleSheet } from 'react-native';
import { makeStyles } from 'react-native-elements';

const useStyles = makeStyles((theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.background,
    },
    text: {
      color: theme.colors.dark,
      fontSize: 20,
      fontWeight: 'bold',
      padding: 10,
      marginVertical: 30,
    },
    starContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      marginBottom: 30,
    },
    subText: {
      color: theme.colors.black,
      padding: 2,
      fontSize: 20,
    },
  })
);

export default useStyles;
