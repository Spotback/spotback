import {StyleSheet} from 'react-native';

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
    zIndex: -1 //added negative Z for profile pic to show
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
    height: 550,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default styles;
