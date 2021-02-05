import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDFFFD',
  },
  titleContainer: {
    position: 'absolute',
    top: -5,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  titleText: {
    color: '#000000',
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 24,
  },
  centerContainer: {
    position: 'absolute',
    top: 180,
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#343A40',
    width: 352,
    height: 246,
    borderRadius: 10,
    elevation: 5
  }
});

export default styles;
