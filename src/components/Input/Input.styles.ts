import { StyleSheet } from 'react-native';
import { makeStyles } from 'react-native-elements';

const useStyles = makeStyles((theme: any) =>
  StyleSheet.create({
    largeInput: {
      backgroundColor: theme.colors.light,
      padding: 10,
      width: 315,
      height: 50,
      borderRadius: 10,
      borderWidth: 4,
      borderColor: theme.colors.primary,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 10,
    },
    mediumInput: {
      backgroundColor: theme.colors.light,
      padding: 10,
      width: 149,
      height: 50,
      borderRadius: 10,
      borderWidth: 4,
      borderColor: theme.colors.primary,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 10,
    },
    smallInput: {
      backgroundColor: theme.colors.light,
      padding: 10,
      width: 124,
      height: 35,
      borderRadius: 10,
      borderWidth: 4,
      borderColor: theme.colors.primary,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 10,
    },
  })
);

export default useStyles;
