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
    image: {
      width: 273,
    },
    button: {
      marginVertical: 10,
    },
    text: {
      color: theme.colors.dark,
      
      margin: 10,
      fontSize: 24,
      fontWeight: 'bold',
      padding: 10,
    },
  })
);

export default useStyles;
