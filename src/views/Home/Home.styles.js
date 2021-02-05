import {StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FDFFFD',
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDFFFD',
    zIndex: -1, //added negative Z for profile pic to show
  },
  buttonContainer: {
    bottom: 50,
    position: 'absolute',
  },
  spacing: {
    padding: 5,
  },
  mapView: {
    ...StyleSheet.absoluteFillObject,
    height: height - 150,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  slider: {
    backgroundColor: '#FDFFFD',
    height: height,
  },
});

export default styles;
