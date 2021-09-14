import { StyleSheet } from 'react-native';
import { makeStyles } from 'react-native-elements';

const useStyles = (titleColor?: string, backgroundColor?: string) =>
  makeStyles((theme: any) =>
    StyleSheet.create({
      buttonLarge: {
        alignItems: 'center',
        backgroundColor: backgroundColor ? backgroundColor : theme.colors.primary,
        padding: 8,
        width: 315,
        height: 50,
        borderRadius: 10,
        elevation: 5,
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      buttonMedium: {
        alignItems: 'center',
        backgroundColor: backgroundColor ? backgroundColor : theme.colors.primary,
        width: 165,
        height: 55,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      buttonSmall: {
        alignItems: 'center',
        backgroundColor: backgroundColor ? backgroundColor : theme.colors.primary,
        width: 122,
        height: 30,
        borderRadius: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      titleLarge: {
        color: titleColor ? titleColor : theme.colors.light,
        fontSize: 24,
      },
      titleMedium: {
        color: titleColor ? titleColor : theme.colors.light,
        fontSize: 18,
        width: 85,
      },
      titleSmall: {
        color: titleColor ? titleColor : theme.colors.light,
        fontSize: 10,
      },
      icon: {
        marginLeft: 15,
        width: 30,
        height: 40,
      },
    })
  );

export default useStyles;
