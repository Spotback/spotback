import { StyleSheet } from 'react-native';
import { makeStyles } from 'react-native-elements';

const useStyles = makeStyles((theme: any) =>
  StyleSheet.create({
    container: {
      paddingLeft: 15,
    },
    image: {
      width: 45,
      height: 45,
    },
  })
);

export default useStyles;
