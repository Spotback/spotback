import { StyleSheet, Platform } from 'react-native';
import { makeStyles } from 'react-native-elements';

const useStyles = (isPasswordInput?: boolean) =>
  makeStyles((theme: any) =>
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
        elevation: Platform.OS === 'android' && isPasswordInput ? 0 : 10,
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
      eyeIconStyles: {
        width: 20,
        height: 20,
        position: 'absolute',
        bottom: 15,
        right: 11,
      },
    })
  );

export default useStyles;
