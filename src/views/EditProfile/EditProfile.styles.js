import {StyleSheet} from 'react-native';

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
    marginVertical: 20,
    alignItems: 'flex-end', 
  },
  subText: {
    color: '#000000',
    fontFamily: 'PT Sans',
    padding: 2,
    fontSize: 20,
    padding: 10
  },
  itemContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});

export default styles;
