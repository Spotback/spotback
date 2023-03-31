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
        zIndex: 1,
      },
      buttonMedium: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 15,
        backgroundColor: backgroundColor ? backgroundColor : theme.colors.primary,
        // flex: 1,
        width: 165,
        height: 55,
        borderRadius: 10,
        elevation: 5,
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        zIndex: 1,
      },
      buttonSmall: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: backgroundColor ? backgroundColor : theme.colors.primary,
        width: 122,
        height: 30,
        borderRadius: 20,
        elevation: 5,
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        zIndex: 1,
      },
      titleLarge: {
        color: titleColor ? titleColor : theme.colors.light,
        fontSize: 24,
      },
      titleMedium: {
        color: titleColor ? titleColor : theme.colors.light,
        fontSize: 18,
        flexWrap: 'wrap',
        flex: 1,
        textAlign: 'center',
      },
      titleSmall: {
        color: titleColor ? titleColor : theme.colors.light,
        fontSize: 10,
      },
      icon: {
        width: 32,
        height: 40,
      },
      matchedUserPic: {
        position: 'absolute',
        right: 20,
        bottom: 20 
      },
    })
  );

export default useStyles;
