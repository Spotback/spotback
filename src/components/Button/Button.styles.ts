import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonLarge: {
    alignItems: 'center',
    backgroundColor: '#343A40',
    padding: 8,
    width: 315,
    height: 50,
    borderRadius: 10,
    elevation: 5,
  },
  buttonMedium: {
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
  buttonSmallGray: {
    alignItems: 'center',
    backgroundColor: '#343A40',
    width: 122,
    height: 30,
    borderRadius: 10,
    marginRight: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    elevation: 5,
  },
  buttonSmallWhite: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: 122,
    height: 30,
    borderRadius: 10,
    marginRight: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    elevation: 5,
  },
  titleLarge: {
    color: '#fff',
    fontSize: 24,
  },
  titleMedium: {
    color: '#fff',
    fontSize: 18,
    width: 85,
  },

  icon: {
    marginLeft: 15,
    width: 30,
    height: 40,
  },

  buttonColors: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#343A40',
    width: 165,
    height: 55,
    borderRadius: 10,
    elevation: 5,
  },
  redTitle: {
    color: '#FF0000',
    fontSize: 18,
    width: 85,
  },
  greenTitle: {
    color: '#70B81D',
    fontSize: 18,
    width: 85,
  },
  whiteTitle: {
    color: '#FFF',
    fontSize: 18,
    width: 85,
  },
});

export default styles;
