import { StyleSheet } from 'react-native';
import { makeStyles } from 'react-native-elements';

const useStyles = makeStyles((theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor:  theme.colors.background,
    },
    image: {
      height: 40,
      width: 40,
      marginTop: 10,
    },
    centerContainer: {
      marginTop: 300,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);

export default useStyles;
