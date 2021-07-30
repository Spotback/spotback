import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonLarge: {
    alignItems: 'center',
    backgroundColor: '#343A40',
    padding: 8,
    width: 315,
    height: 50,
    borderRadius: 10,
    elevation: 5
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
    elevation: 5,
  },
  icon: {
    marginLeft: 15,
    width: 30,
    height: 40,
  },
  titleSmall: {
    color: '#fff',
    fontSize: 18,
    width: 85,
  },
  buttonColors: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#343A40',
    width: 165,
    height: 55,
    borderRadius: 10,
    elevation: 5
  },
  buttonRed: {
    color: '#FF0000',
    fontSize: 20
  },
  buttonGreen: {
    color: '#70B81D',
    fontSize: 20
  },
  buttonWhite: {
    color: '#FFF',
    fontSize: 20
  }
});

export default styles;