import * as RootNavigation from '@navigation/RootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setAsyncStorage = async (value: string) => {
  try {
    await AsyncStorage.setItem('@spotback_storage_key', JSON.stringify(value));
    console.log('setAsyncStorage TRY ', value);
  } catch (err) {
    console.log('store data err ', err);
  }
};

export const getAsyncStorage = async (key?: string) => {
  try {
    const value = await AsyncStorage.getItem('@spotback_storage_key');
    if (value) {
      console.log('getAsyncStorage TRY ', value);
      RootNavigation.navigate('Home');
      return value;
    } else {
      RootNavigation.navigate('Onboarding');
    }
  } catch (err) {
    console.log('get data err ', err);
  }
};

export const removeAsyncStorage = async (key?: string) => {
  try {
    await AsyncStorage.removeItem('@spotback_storage_key');
    console.log('removeAsyncStorage TRY ');
    RootNavigation.navigate('Onboarding');
  } catch (err) {
    console.log('get data err ', err);
  }
};
