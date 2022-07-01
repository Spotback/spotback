import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import { makeStyles } from 'react-native-elements';

const width = Dimensions.get('window').width;

const useStyles = makeStyles((theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: theme.colors.background,
    },
    image: {
      height: 40,
      width: 40,
    },
    scrollViewStyle: {
      flexGrow: 1,
      justifyContent: 'center',
      width: width,
      paddingHorizontal: 30,
    },
    profilePicContainer: {
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      margin: 20,
    },
    editText: {
      fontSize: 24,
      color: theme.colors.light,
      top: 35,
      left: 30,
      position: 'absolute',
      zIndex: 1,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 10,
    },
    licenseContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    subText: {
      color: theme.colors.dark,
      fontSize: 20,
    },
    pickerContainer: {
      width: '90%',
      borderRadius: 10,
    },
    pickerSubText: {
      color: theme.colors.dark,
      fontSize: 20,
    },
    subContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      bottom: 30,
      position: 'absolute',
    },
    bottom: {
      flex: 1,
      justifyContent: 'flex-end',
      marginTop: 100,
      alignItems: 'center',
    },
  })
);

export default useStyles;
