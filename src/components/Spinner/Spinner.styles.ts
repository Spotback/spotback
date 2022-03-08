import { StyleSheet, Dimensions } from 'react-native';
import { makeStyles } from 'react-native-elements';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const useStyles = makeStyles((theme: any) =>
  StyleSheet.create({
    subContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      marginVertical: 10,
      color: theme.colors.shadow,
      paddingBottom: 0,
      fontSize: 20,
    },
  })
);

export default useStyles;
