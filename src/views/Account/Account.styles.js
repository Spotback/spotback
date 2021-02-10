import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FDFFFD',
  },
  titleContainer: {
    top: -5,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  centerContainer: {
    width: 310,
    height: 150,
    padding: 10,
    marginVertical: 5,
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
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: 50,
    padding: 2
  },
  text: {
    fontSize: 20,
    padding: 10
  },
  image: {
    height: 40,
    width: 40,
  },
});

export default styles;
