import * as RootNavigation from '../navigation/RootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value: string) => {
  console.log('stored?');
  try {
    await AsyncStorage.setItem('@storage_Key', value);
  } catch (e) {
    console.log('store data err ', e);
  }
};

const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key');
    if (value !== null && value === 'userId') {
    } else {
      RootNavigation.navigate('OnBoarding');
    }
  } catch (e) {
    console.log('get data err ', e);
  }
};

export { storeData, getData };
