import { StyleSheet, Dimensions } from 'react-native';
import { makeStyles } from 'react-native-elements';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const useStyles = makeStyles((theme: any) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    incomingText: {
      opacity: 0.5,
      backgroundColor: theme.colors.primary,
      padding: 10,
      width: 324,
      height: 50,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: theme.colors.primary,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 10,
    },
    input: {
      backgroundColor: theme.colors.light,
      fontSize: 10,
      fontWeight: 'bold',
      padding: 10,
      margin: 5,
      width: 291,
      height: 30,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: theme.colors.primary,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
      marginHorizontal: 2,
      flex: 1,
      alignItems: 'center',
      backgroundColor: theme.colors.light,
      width: 63,
      height: 41,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: theme.colors.primary,
      flexDirection: 'row',
      justifyContent: 'center',
      elevation: 5,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
    },
    buttonTitle: {
      color: theme.colors.dark,
      fontSize: 10,
    },
    icon: {
      width: 30,
      height: 40,
    },
  })
);

export default useStyles;
