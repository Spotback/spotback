import { StyleSheet } from 'react-native';
import { makeStyles } from 'react-native-elements';

const useStyles = makeStyles((theme: any) =>
  StyleSheet.create({
    orange: {
      color: theme.colors.warning,
    },
    starStyle: {
      marginHorizontal: 5,
    },
  })
);

export default useStyles;
