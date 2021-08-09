import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FDFFFD',
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
    width: 310,
    height: 150,
    marginVertical: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  secondaryContainer: {
    marginTop: 80,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  subText: {
    color: '#000000',
    fontFamily: 'PT Sans',
    padding: 2,
    fontSize: 20,
  },
  sendArrow: {
      position: 'absolute',
      left: 260,
      top: 35
  }
});

export default styles;
