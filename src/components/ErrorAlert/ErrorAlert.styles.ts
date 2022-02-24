import { StyleSheet, Dimensions } from 'react-native';
import { makeStyles } from 'react-native-elements';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const useStyles = makeStyles((theme: any) =>
  StyleSheet.create({
    container: {
      width: width,
      height: height,
      //   not sure why but its off to the right without this
      marginLeft: -20,
    },
    subContainer: {
      alignSelf: 'flex-end',
      position: 'absolute',
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.light,
      width: width,
      height: 120,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    text: {
      marginVertical: 10,
      color: theme.colors.dark,
      paddingBottom: 0,
    },
  })
);

export default useStyles;
