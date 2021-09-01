import * as RootNavigation from '../navigation/RootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value: string) => {
  try {
    await AsyncStorage.setItem('@spotback_storage_key', value);
    console.log('storeData? TRY ', value);
  } catch (err) {
    console.log('store data err ', err);
  }
};

const getData = async (key?: string) => {
  try {
    const value = await AsyncStorage.getItem('@spotback_storage_key');
    if (value !== null) {
      console.log('getData? TRY ', value);
      RootNavigation.navigate('Home');
      return value;
    } else {
      RootNavigation.navigate('Onboarding');
    }
  } catch (err) {
    console.log('get data err ', err);
  }
};

const removeData = async () => {
  try {
    await AsyncStorage.removeItem('@spotback_storage_key');
    console.log('removeData? TRY ');
    RootNavigation.navigate('Onboarding');
  } catch (err) {
    console.log('get data err ', err);
  }
};

export { storeData, getData, removeData };
