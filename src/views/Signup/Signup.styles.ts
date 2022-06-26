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
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
    },
    input: {
      marginVertical: 5,
      marginHorizontal: 10,
    },
    button: {
      margin: 50,
    },
  })
);

export default useStyles;
