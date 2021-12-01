import { StyleSheet, Dimensions } from 'react-native';
import { makeStyles } from 'react-native-elements';

const useStyles = (blured?: string) =>
  makeStyles((theme: any) =>
    StyleSheet.create({
      small: {
        width: 50,
        height: 50,
        borderRadius: 50,
        opacity: blured ? 0.7 : 1,
      },
      medium: {
        width: 65,
        height: 65,
        borderRadius: 50,
        opacity: blured ? 0.7 : 1,
      },
      large: {
        height: 100,
        width: 100,
        borderRadius: 50,
        opacity: blured ? 0.7 : 1,
      },
      blured: {
        marginVertical: 20,
        height: 100,
        width: 100,
        borderRadius: 50,
        opacity: 0.7,
      },
    })
  );

export default useStyles;
