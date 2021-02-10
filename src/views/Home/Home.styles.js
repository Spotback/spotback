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
    height: height - 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  sliderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20
  },
  spotNewsContainer: {
    backgroundColor: '#FFF',
    padding: 10,
    width: 319,
    height: 126,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#343A40',
    shadowColor: '#797979',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textContainer: {
    width: 220,
  },
  text: {
    fontSize: 20,
  },
  image: {
    height: 60,
    width: 60,
  },
});

export default styles;
