import { StyleSheet } from 'react-native';
import { makeStyles } from 'react-native-elements';

const useStyles = makeStyles((theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: theme.colors.background,
    },
    titleText: {
      color: theme.colors.dark,
      fontWeight: 'bold',
      fontSize: 24,
    },
    image: {
      height: 40,
      width: 40,
      marginTop: 10,
    },
    centerContainer: {
      width: 310,
      height: 150,
      marginVertical: 50,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
    secondaryContainer: {
      alignItems: 'center',
      position: 'absolute',
      left: 0,
      top: 200,
    },
    subText: {
      color: theme.colors.dark,
      marginBottom: 20,
      fontSize: 20,
    },
    sendArrow: {
      position: 'absolute',
      left: 260,
      top: 5,
      width: 40,
      height: 40,
    },
  })
);

export default useStyles;
