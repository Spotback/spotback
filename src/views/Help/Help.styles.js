import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FDFFFD',
  },
  titleContainer: {
    top: -10,
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
  image: {
    height: 40,
    width: 40,
    marginTop: 10
  },
  centerContainer: {
    marginTop: 200,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default styles;
