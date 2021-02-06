import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 10,
    width: 319,
    height: 126,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#343A40',
    shadowColor: '#797979',
    shadowOffset: {width: 0, height: 1},
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
});

export default styles;
