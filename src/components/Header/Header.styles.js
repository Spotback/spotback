import {StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#343A40',
    width: width,
    height: 75,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  footer: {
    backgroundColor: '#343A40',
    width: width,
    height: 75,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  profilePic: {
    position: 'absolute',
    left: 25,
    top: 40,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    marginTop: 80,
    left: 25,
  },
  footerLine: {
    alignSelf: 'flex-start',
    borderTopColor: 'white',
    borderTopWidth: 3,
  },
  footerTitle: {
    color: '#fff',
    fontSize: 24,
    left: 0,
  },
  balance: {
    color: '#fff',
    fontSize: 24,
    left: 120,
  },
});

export default styles;
