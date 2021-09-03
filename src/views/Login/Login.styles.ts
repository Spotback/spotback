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
      marginHorizontal: 10,
    },
    input: {
      marginVertical: 10,
      marginHorizontal: 10,
    },
    link: {
      marginTop: 20,
      marginHorizontal: 10,
    },
    button: {
      margin: 30,
    },
  })
);

export default useStyles;
