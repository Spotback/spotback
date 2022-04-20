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
    // secondary Modal
    innerModalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // height: 400,
    },

    // messenger
    spotSwitchCompleteContainer: {
      marginLeft: 'auto',
      marginBottom: 5,
      marginRight: 30,
    },
    bottomContainer: {
      flex: 1,
      bottom: 20,
      position: 'absolute',
      left: 0,
      right: 0,
    },
    chatContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    scrollMessagingContainer: {
      backgroundColor: theme.colors.primaryNoChildOpacity,
      padding: 4,
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
    scrollItemsContainer: {
      paddingBottom: 10,
      paddingHorizontal: 5,
    },
    incomingTextLeft: {
      flexDirection: 'row',
      alignSelf: 'flex-start',
      backgroundColor: theme.colors.light,
      padding: 4,
      borderRadius: 10,
      marginVertical: 1,
    },

    incomingTextRight: {
      flexDirection: 'row',
      alignSelf: 'flex-end',
      backgroundColor: theme.colors.success,
      padding: 4,
      borderRadius: 10,
      marginVertical: 1,
    },
    incomingTextMsg: {
      color: theme.colors.dark,
      fontSize: 10,
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
