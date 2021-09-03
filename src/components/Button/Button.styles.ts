import { StyleSheet } from 'react-native';

const styles = (titleColor?: any, backgroundColor?: any) =>
  StyleSheet.create({
    buttonLarge: {
      alignItems: 'center',
      backgroundColor: backgroundColor ? backgroundColor : '#343A40',
      padding: 8,
      width: 315,
      height: 50,
      borderRadius: 10,
      elevation: 5,
    },
    buttonMedium: {
      alignItems: 'center',
      backgroundColor: backgroundColor ? backgroundColor : '#343A40',
      width: 165,
      height: 55,
      borderRadius: 10,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      elevation: 5,
    },
    buttonSmall: {
      alignItems: 'center',
      backgroundColor: backgroundColor ? backgroundColor : '#343A40',
      width: 122,
      height: 30,
      borderRadius: 20,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      elevation: 5,
    },
    titleLarge: {
      color: titleColor ? titleColor : '#fff',
      fontSize: 24,
    },
    titleMedium: {
      color: titleColor ? titleColor : '#fff',
      fontSize: 18,
      width: 85,
    },
    titleSmall: {
      color: titleColor ? titleColor : '#fff',
      fontSize: 10,
    },

    icon: {
      marginLeft: 15,
      width: 30,
      height: 40,
    },
  });

export default styles;
