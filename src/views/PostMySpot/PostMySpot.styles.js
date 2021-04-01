import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDFFFD',
  },
  centerContainer: {
    padding: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#343A40',
    width: 352,
    height: 161,
    borderRadius: 10,
    elevation: 5,
    marginBottom: 5,
  },
  subContainer: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  subPicker: {
    flex: 1
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  titleContainer: {
    position: 'absolute',
    top: -5,
    alignItems: 'center',
    textAlign: 'center',
  },
  titleText: {
    color: '#000000',
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 24,
  },
  subText: {
    color: '#FFFF',
    fontFamily: 'PT Sans',
    fontSize: 20,
    // flex: 1,
    // flexWrap: 'wrap',
  },
  buttonsContainer: {
    marginTop: 20,
  },
});

export default styles;
