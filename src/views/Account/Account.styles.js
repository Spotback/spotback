import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDFFFD',
  },
  titleContainer: {
    // position: 'absolute',
    top: -5,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  centerContainer: {
    width: 310,
    height: 150,
    // top: 180,
    padding: 10,
    // position: 'absolute',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderColor: '#343A40',
    borderWidth: 4,
    borderRadius: 10,
    elevation: 5,
  },
  profilePicImage: {
    width: 100,
    height: 100,
  },
  starContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 5,
  },
  orange: {
    color: 'orange',
  },
  titleText: {
    color: '#000000',
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 24,
  },
  subText: {
    color: '#000000',
    fontFamily: 'PT Sans',
    padding: 2,
    fontSize: 20,
  },
});

export default styles;
