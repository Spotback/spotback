import { StyleSheet } from 'react-native';
import { makeStyles } from 'react-native-elements';

const useStyles = makeStyles((theme: any) =>
  StyleSheet.create({
    container: {
      paddingTop: 2.5,
      paddingLeft: 5,
    },
    image: {
      width: 45,
      height: 45,
    },
  })
);

export default useStyles;
