import axios from 'axios';
import { USERS_BASE_URL } from '@env';
import * as RootNavigation from '../../../navigation/RootNavigation';
import { v4 as uuidv4 } from 'uuid';
import { storeData, getData } from '../../../utils/asyncStorage';

console.log(`${USERS_BASE_URL}/createAccount`);

export const signUp = (
  email: string,
  firstName: string,
  lastName: string,
  password: string,
  phone: string
) => {
  return (dispatch: any) => {
    axios
      .post(
        `${USERS_BASE_URL}/createAccount`,
        {
          email,
          firstName,
          lastName,
          password,
          phone,
        },
        {
          headers: { 'spotback-correlation-id': uuidv4() },
        }
      )
      .then((res) => {
        console.log('res', res);
        // response doesnt send back user info
        dispatch({
          type: 'SIGN_UP',
          payload: { email, firstName, lastName, password, phone },
        });
        RootNavigation.navigate('Home');
      })
      .catch((err) => {
        console.log('err ', err.response.data);
      });
  };
};

export const logIn = (email: string, password: string) => {
  return (dispatch: any) => {
    axios
      .post(
        `${USERS_BASE_URL}/readAccount`,
        {
          email,
          password,
        },
        {
          headers: { 'spotback-correlation-id': uuidv4() },
        }
      )
      .then((res) => {
        console.log('res', res);
        storeData(res.data._id);
        dispatch({
          type: 'LOG_IN',
          payload: res.data,
        });
        RootNavigation.navigate('Home');
      })
      .catch((err) => {
        console.log('err ', err.response.data);
      });
  };
};

export const update = (
  carType: string,
  color: string,
  make: string,
  model: string,
  year: string,
  email: string,
  password: string,
) => {
  return (dispatch: any) => {
    axios
      .post(
        `${USERS_BASE_URL}/updateAccount`,
        {
          car: {
            carType,
            color,
            make,
            model,
            year,
          },
          email,
          password,
        },
        {
          headers: { 'spotback-correlation-id': uuidv4() },
        }
      )
      .then((res) => {
        console.log('res', res);
        dispatch({
          type: 'UPDATE',
          payload: res.data,
        });
        RootNavigation.navigate('Account');
      })
      .catch((err) => {
        console.log('err ', err.response.data);
      });
  };
};
