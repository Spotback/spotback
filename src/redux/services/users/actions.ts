import axios from 'axios';
import * as RootNavigation from '../../../navigation/RootNavigation';
import { storeData, getData } from '../../../utils/asyncStorage';
import { USERS_BASE_URL } from '@env';

export const signUp = (email, firstName, lastName, password, phone) => {
  return (dispatch) => {
    axios
      .post(`${USERS_BASE_URL}/createAccount`, {
        email,
        firstName,
        lastName,
        password,
        phone,
      })
      .then((res) => {
        const response = res.data;
        storeData(response.user._id);
        dispatch({
          type: 'SIGN_UP',
          payload: response,
        });
        RootNavigation.navigate('Home');
      })
      .catch((err) => {
        console.log('signUp err ', err);
      });
  };
};
