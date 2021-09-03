import { StyleSheet } from 'react-native';
import { makeStyles } from 'react-native-elements';

const useStyles = makeStyles((theme: any) =>
  StyleSheet.create({
    container: {
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
    },
    image: {
      width: 273,
    },
  })
);

export default useStyles;
