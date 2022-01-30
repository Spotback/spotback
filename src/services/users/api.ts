import axios from 'axios';
import { USERS_BASE_URL } from '@env';
import * as RootNavigation from '@navigation/RootNavigation';
import { v4 as uuidv4 } from 'uuid';
import { setAsyncStorage, getAsyncStorage } from '@utils/asyncStorage';
import { UserTypes } from './types';

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
        //TODO: response doesnt send back user info
        dispatch({
          type: UserTypes.SIGN_UP,
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
        setAsyncStorage(res.data._id);
        dispatch({
          type: UserTypes.LOG_IN,
          payload: res.data,
          headers: res.headers,
        });
        RootNavigation.navigate('Home');
      })
      .catch((err) => {
        console.log('err ', err.response.data);
      });
  };
};

export const update = (
  bearer: string,
  licencePlate?: string,
  make?: string,
  model?: string,
  year?: string,
  color?: string,
  carType?: string
) => {
  return (dispatch: any) => {
    axios
      .post(
        `${USERS_BASE_URL}/updateAccount`,
        {
          car: {
            licencePlate,
            carType,
            color,
            make,
            model,
            year,
          },
        },
        {
          headers: {
            'spotback-correlation-id': uuidv4(),
            Bearer: bearer,
          },
        }
      )
      .then((res) => {
        console.log('res', res);
        dispatch({
          type: UserTypes.UPDATE,
          payload: res.data,
        });
        RootNavigation.navigate('Account');
      })
      .catch((err) => {
        console.log('err ', err.response.data);
      });
  };
};
