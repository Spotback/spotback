import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FDFFFD',
  },
  image: {
    height: 40,
    width: 40,
  },
  profilePicImage: {
    marginVertical: 20,
  },
  centerContainer: {
    alignItems: 'flex-end',
  },
  subText: {
    color: '#000000',
    fontFamily: 'PT Sans',
    fontSize: 20,
    padding: 10,
  },
  itemContainer: {
    padding: 5,
    flexDirection: 'row',
  },
  buttonContainer: {
    bottom: 30,
    position: 'absolute',
  },
});

export default styles;
