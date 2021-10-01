import axios from 'axios';
import { USERS_BASE_URL } from '@env';
import * as RootNavigation from '@navigation/RootNavigation';
import { v4 as uuidv4 } from 'uuid';
import { storeData, getData } from '@utils/asyncStorage';

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
  carType?: string,
  color?: string,
  make?: string,
  model?: string,
  year?: string,
  email?: string
) => {
  return (dispatch: any) => {
    console.log('email ', email);
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
        },
        {
          headers: {
            'spotback-correlation-id': uuidv4(),
            Authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImR5bGFuY29yYnVzMTk5NUBnbWFpbC5jb20iLCJpYXQiOjE2MzMxMjYwNTksImV4cCI6MTYzMzczMDg1OSwiYXVkIjoiaHR0cHM6Ly9zcG90YmFjay5hdXRoMC5jb20vYXBpL3YyLyIsImlzcyI6Imh0dHBzOi8vc3BvdGJhY2suYXV0aDAuY29tLyJ9.EvDrogKoL6C3Mr9PhVAlhVYFUMwfhG4mktJJmc5GYdRYvf0jaLRJ1VvpEPxA7HcTQfCENfV_yc6O_R-4TelHYZ6th8yRu3HDLz8j41xhBX61IR5S1u9zSQiZWlbEahyIA9Y5MbxY4-vWipyTaO6GGb-vMTbpW-xs_hCNUh9QeoyaPm2J7aPkAM8m41poIJ7xmAAwAaDbe6tQBszvoPLLn7R21OXjS_6NdycKktQ30v4i8AYBEH5foO8IQe9RZ80YhS1EurjR68W9E4pz8GQ_XyBEK90yqkux6jCJ6OepMRVYE3IJYnEVIiIEMHjVgcPAxiPZRe802ovkHrKSozHRIQ',
          },
        }
      )
      .then((res) => {
        console.log('res', res);
        // dispatch({
        //   type: 'UPDATE',
        //   payload: res.data,
        // });
        // RootNavigation.navigate('Account');
      })
      .catch((err) => {
        console.log('err ', err.response.data);
      });
  };
};
