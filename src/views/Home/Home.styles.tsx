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
    largeButtonContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    smallButtonContainer: {
      top: 90,
      right: 20,
      position: 'absolute',
    },
    customTopButton: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
      backgroundColor: theme.colors.primary,
      width: 105,
      height: 55,
      borderRadius: 10,
      elevation: 5,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
    },
    customTopText: {
      color: theme.colors.light,
      fontSize: 18,
      flexWrap: 'wrap',
      flex: 1,
    },
    customBottomButton: {
      alignItems: 'center',
      backgroundColor: theme.colors.primary,
      width: 105,
      height: 38,
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
    customBottomText: {
      color: theme.colors.light,
      fontSize: 18,
    },
    spacing: {
      marginVertical: 5,
    },

    slider: {
      backgroundColor: theme.colors.background,
      height: height - 200,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    sliderContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 20,
    },
    spotNewsContainer: {
      backgroundColor: theme.colors.light,
      padding: 10,
      width: 319,
      height: 126,
      borderRadius: 10,
      borderWidth: 4,
      borderColor: theme.colors.primary,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 10,
      marginVertical: 5,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    textContainer: {
      width: 220,
    },
    text: {
      fontSize: 20,
    },
    image: {
      height: 60,
      width: 60,
    },
  })
);

export default useStyles;
