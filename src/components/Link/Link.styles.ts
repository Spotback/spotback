import { StyleSheet } from 'react-native';
import { makeStyles } from 'react-native-elements';

const useStyles = makeStyles((theme: any) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    extraText: {
      fontSize: 20,
      marginRight: 5,
    },
    linkText: {
      fontSize: 20,
      color: theme.colors.success,
    },
  })
);

export default useStyles;
