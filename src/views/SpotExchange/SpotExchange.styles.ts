import { StyleSheet, Dimensions } from 'react-native';
import { makeStyles } from 'react-native-elements';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const useStyles = makeStyles((theme: any) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    subContainer: {
      flex: 1,
      backgroundColor: theme.colors.background,
      zIndex: -1,
    },

    mapView: {
      ...StyleSheet.absoluteFillObject,
      height,
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },

    // modal
    modalContainer: {
      height: 200,
    },
    centeredView: {
      flex: 1,
      alignItems: 'center',
      marginTop: 10,
    },
    modalView: {
      width: 360,
      height: 150,
      backgroundColor: theme.colors.primary,
      borderRadius: 15,
      padding: 15,
      elevation: 5,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
    },
    modalTextContainer: {
      position: 'absolute',
      top: 35,
      left: 20,
    },
    modalText: {
      color: 'white',
      fontWeight: 'bold',
      marginVertical: 4,
    },
    starContainer: {
      position: 'absolute',
      bottom: 15,
      right: 20,
    },
    cancelTransaction: {
      marginLeft: 20,
      marginBottom: 5,
    },

    // secondary modal
    secondaryModalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 400,
    },
    secondaryModalView: {
      width: 333,
      height: 112,
      backgroundColor: theme.colors.primary,
      borderRadius: 15,
      elevation: 5,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
    },

    secondaryModalText: {
      color: 'white',
      fontWeight: 'bold',
      marginTop: 15,
      marginLeft: 15,
    },
    options: {
      flexDirection: 'row',
      // @TODO: height and width affecting buttons height and width, strange issue.
      height: 60,
      width: 333,
      marginTop: 2,
    },
    buttonSpacing: {
      marginHorizontal: 1,
    },

    // messenger
    spotSwitchCompleteContainer: {
      marginLeft: 'auto',
      marginBottom: 5,
      marginRight: 30,
    },
    messengerContainer: {
      flex: 1,
      bottom: 20,
      position: 'absolute',
      left: 0,
      right: 0,
    },
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
    },
    button: {
      marginHorizontal: 2,
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: theme.colors.light,
      width: 75,
      height: 41,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: theme.colors.primary,
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
