import { StyleSheet } from 'react-native';
import { makeStyles } from 'react-native-elements';

const useStyles = makeStyles((theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: theme.colors.background,
    },
    titleText: {
      color: theme.colors.dark,
      fontFamily: 'PT Sans',
      fontWeight: 'bold',
      fontSize: 24,
    },
    centerContainer: {
      width: 310,
      height: 150,
      padding: 10,
      marginVertical: 5,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      backgroundColor: theme.colors.light,
      borderColor:  theme.colors.primary,
      borderWidth: 4,
      borderRadius: 10,
      elevation: 5,
    },
    profilePicImage: {
      width: 100,
      height: 100,
    },
    starContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      margin: 5,
    },
    subText: {
      color:  theme.colors.black,
      fontFamily: 'PT Sans',
      padding: 2,
      fontSize: 20,
    },
    iconContainer: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginRight: 50,
      padding: 2,
    },
    text: {
      fontSize: 20,
      padding: 10,
    },
    image: {
      height: 40,
      width: 40,
    },
  })
);

export default useStyles;
