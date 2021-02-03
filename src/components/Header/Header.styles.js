import {StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#343A40',
    width: width,
    height: 85,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  profilePic: {
    position: 'absolute',
    left: 25,
    top: 50
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginTop: 100,
    left: 30
  },
  balance: {
    color: '#fff',
    fontSize: 24,
    left: 120
  },
});

export default styles;
