import axios from 'axios';
import { USERS_BASE_URL } from '@env';
import * as RootNavigation from '../../../navigation/RootNavigation';
import { v4 as uuidv4 } from 'uuid';

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
        console.log('the res', res);
        // response doesnt send back user info
        dispatch({
          type: 'SIGN_UP',
          payload: { email, firstName, lastName, password, phone },
        });
        RootNavigation.navigate('Home');
      })
      .catch((err) => {
        console.log('signUp err mesg', err.response.data);
      });
  };
};
