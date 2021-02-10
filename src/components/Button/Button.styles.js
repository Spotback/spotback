import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonLarge: {
    alignItems: 'center',
    backgroundColor: '#343A40',
    padding: 8,
    width: 315,
    height: 50,
    borderRadius: 10
  },
  titleLarge: {
    color: '#fff',
    fontSize: 24
  },
  buttonSmall: {
    alignItems: 'center',
    backgroundColor: '#343A40',
    width: 165,
    height: 55,
    borderRadius: 10,
    marginRight: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    marginLeft: 15,
    width: 25,
    height: 35,
    // borderWidth: 2,
    // borderColor: 'red'
  },
  titleSmall: {
    color: '#fff',
    fontSize: 18,
    // borderWidth: 2,
    // borderColor: 'blue',
    width: 85,
  }
});

export default styles;