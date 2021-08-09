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
  centerContainer: {
    width: 310,
    height: 150,
    marginVertical: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  subText: {
    color: '#000000',
    fontFamily: 'PT Sans',
    fontSize: 20,
    padding: 10,
  },
  itemContainer: {
    padding: 10,
  },
});

export default styles;
