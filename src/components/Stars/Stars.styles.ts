import { StyleSheet } from 'react-native';
import { makeStyles } from 'react-native-elements';

const useStyles = (starWidth?: number) =>
  makeStyles((theme: any) =>
    StyleSheet.create({
      orange: {
        color: theme.colors.warning,
      },
      starContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
      },
      starStyle: {
        marginHorizontal: starWidth,
      },
    })
  );

export default useStyles;
