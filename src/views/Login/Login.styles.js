import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDFFFD',
  },
  centerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginHorizontal: 10
  },
 input: {
      marginVertical: 10,
      marginHorizontal: 10
  },
  link: {
      marginTop: 35,
    marginHorizontal: 15
  },
  button: {
    margin: 30
  }
});

export default styles;
