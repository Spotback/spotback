import * as RootNavigation from '../navigation/RootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
  console.log('stored?');
  try {
    await AsyncStorage.setItem('@storage_Key', value);
  } catch (e) {
    console.log('store data err ', e);
  }
};

const getData = async (value) => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key');
    if (value !== null && value === 'userId') {
    } else {
      RootNavigation.navigate('GetStarted');
    }
  } catch (e) {
    console.log('get data err ', e);
  }
};

export { storeData, getData };
