import { StyleSheet, Dimensions, Platform } from 'react-native';
import { makeStyles } from 'react-native-elements';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const useStyles = makeStyles((theme: any) =>
  StyleSheet.create({
    mainContainer: {
      backgroundColor: theme.colors.background,
      flex: 1,
    },
    subContainer: {
      // backgroundColor: theme.colors.background,
      flex: 1,
      // zIndex: -1,
    },

    mapView: {
      ...StyleSheet.absoluteFillObject,
      // height: height + 30,
      // marginTop: 80,
    },
    // map: {
    //   ...StyleSheet.absoluteFillObject,
    // },

    // modal
    modalContainer: {
      height: 200,
      marginTop: Platform.OS === 'ios' ? 30 : 0,
    },
    centeredView: {
      alignItems: 'center',
      flex: 1,
      marginTop: 10,
    },

    otherUserInfoView: {
      // backgroundColor: theme.colors.primary,
      // borderRadius: 15,
      // elevation: 5,
      // height: 150,
      // padding: 15,
      // shadowColor: theme.colors.shadow,
      // shadowOffset: { width: 0, height: 1 },
      // shadowOpacity: 0.8,
      // shadowRadius: 2,
      // width: 360,
    },
    otherUserTextContainer: {
      left: 20,
      position: 'absolute',
      top: 35,
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
      marginVertical: 4,
    },
    starContainer: {
      top: 70,
      position: 'absolute',
      right: 20,
    },
    transactionsButtonContainer: {
      marginVertical: 5,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
    },

    // secondary Modal
    innerModalContainer: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },

    // messenger
    mainCommunicationsHub: {
      backgroundColor: theme.colors.primaryNoChildOpacity,
      flex: 1,
      top: 260,
      bottom: 0,
      left: 0,
      right: 0,
      position: 'absolute',
      // backgroundColor: theme.colors.primary,
      height: 300,
      padding: 15,
      marginHorizontal: 20,
      borderRadius: 20,
    },

    startNavButton: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 50,
    },
    chatContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollMessagingContainer: {
      backgroundColor: theme.colors.primaryNoChildOpacity,
      borderColor: theme.colors.primary,
      borderRadius: 10,
      borderWidth: 2,
      elevation: 10,
      height: 50,
      padding: 4,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      width: 324,
    },
    scrollItemsContainer: {
      paddingBottom: 10,
      paddingHorizontal: 5,
    },
    messageChat: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    input: {
      backgroundColor: theme.colors.light,
      borderColor: theme.colors.primary,
      borderRadius: 20,
      borderWidth: 2,
      fontSize: 11,
      fontWeight: 'normal',
      margin: 5,
      height: 30,
      padding: 3,
      paddingLeft: 6,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      width: 291,
    },
    sendMessageButton: {
      position: 'absolute',
      right: 15,
      top: 10,
    },
    buttonsContainer: {
      flexDirection: 'row',
      height: 50,
    },
    button: {
      alignItems: 'center',
      backgroundColor: theme.colors.light,
      borderColor: theme.colors.primary,
      borderRadius: 20,
      borderWidth: 2,
      elevation: 5,
      flex: 1,
      flexDirection: 'row',
      height: 41,
      justifyContent: 'center',
      marginHorizontal: 2,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      width: 75,
    },
    buttonTitle: {
      color: theme.colors.dark,
      fontSize: 11,
    },

    // Users Messages
    incomingTextRight: {
      alignSelf: 'flex-end',
      backgroundColor: theme.colors.success,
      borderRadius: 10,
      flexDirection: 'row',
      marginVertical: 1,
      padding: 4,
    },
    incomingTextLeft: {
      alignSelf: 'flex-start',
      backgroundColor: theme.colors.light,
      borderRadius: 10,
      flexDirection: 'row',
      marginVertical: 1,
      padding: 4,
    },
    incomingTextMsg: {
      color: theme.colors.dark,
      fontSize: 11,
    },
    openCommumnicationHubButton: {
      position: 'absolute',
      bottom: 0,
      // left: 0,
      right: 0,
      // top: 0,
     
    },
    customButtonStyles: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      paddingHorizontal: 15,
      backgroundColor: theme.colors.primary,
      // flex: 1,
      width: 195,
      height: 113.5,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 40,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      elevation: 5,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      zIndex: 1,
    },
  })
);

export default useStyles;
