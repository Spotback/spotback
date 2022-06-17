import { StyleSheet } from 'react-native';
import { makeStyles } from 'react-native-elements';

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
    centerContainer: {
      width: 310,
      height: 150,
      marginVertical: 50,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    subText: {
      color: theme.colors.dark,
      
      fontSize: 20,
      padding: 10,
    },
    itemContainer: {
      padding: 10,
    },
  })
);

export default useStyles;
