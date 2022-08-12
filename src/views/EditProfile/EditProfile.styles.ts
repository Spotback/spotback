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
      paddingHorizontal: 25,
    },
    profileImagesContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 20,
      padding: 30,
      borderRadius: 10,
      backgroundColor: theme.colors.primary,
    },
    profilePicContainer: {
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
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
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
      zIndex: 1,
    },
    subText: {
      color: theme.colors.dark,
      fontSize: 20,
    },
    subContainer: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    pickerContainer: {
      width: '50%',
      // height: 20,
      borderRadius: 10,
      // TODO: fix why it needs negative margin
      marginTop: -70,
    },
    pickerSubText: {
      color: theme.colors.dark,
      fontSize: 20,
      // TODO: fix why it needs negative margin
      marginTop: -70,
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
