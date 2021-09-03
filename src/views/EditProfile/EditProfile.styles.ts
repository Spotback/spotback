import { StyleSheet } from 'react-native';
import { makeStyles } from 'react-native-elements';

const useStyles = makeStyles((theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor:  theme.colors.background,
    },
    image: {
      height: 40,
      width: 40,
    },
    profilePicImage: {
      marginVertical: 20,
    },
    centerContainer: {
      alignItems: 'flex-end',
    },
    subText: {
      color:  theme.colors.dark,
      fontFamily: 'PT Sans',
      fontSize: 20,
      padding: 10,
    },
    itemContainer: {
      padding: 5,
      flexDirection: 'row',
    },
    buttonContainer: {
      bottom: 30,
      position: 'absolute',
    },
  })
);

export default useStyles;
