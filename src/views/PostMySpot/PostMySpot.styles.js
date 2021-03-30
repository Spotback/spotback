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
    // position: 'absolute',
    // top: 180,
    // padding: 5,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-start',
    // justifyContent: 'space-between',
    backgroundColor: '#343A40',
    width: 352,
    height: 161,
    borderRadius: 10,
    elevation: 5,
    marginBottom: 5,
  },
  subContainer: {
    width: 200,
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
    padding: 2,
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
  },
  buttonsContainer: {
    marginTop: 20,
  },

  OptionWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 50,
    borderWidth: 3,
    borderRadius: 10,
  },
});

export default styles;
