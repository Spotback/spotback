import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDFFFD'
  },
  titleContainer: {
    position: 'absolute',
    top: -5,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center'
  },
  titleText: {
    color: '#000000',
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 24
  },
  buttonsContainer: {
    // flexDirection: 'row',
    // position: 'absolute',
    // top: 120,
    // width: 352,
    marginTop: 20
  },
  centerContainer: {
    // position: 'absolute',
    // top: 180,
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#343A40',
    width: 352,
    height: 161,
    borderRadius: 10,
    elevation: 5,
    marginBottom: 5
  }
});

export default styles;
