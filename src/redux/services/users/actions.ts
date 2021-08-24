import axios from 'axios';
import { USERS_BASE_URL } from '@env';

export const signUp = (email, firstName, lastName, password, phone) => {
  console.log('signup params ', email, firstName, lastName, password, phone);
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
        const response = res;
        console.log('the response ', response);
        // dispatch({
        //   type: 'SIGN_UP',
        //   payload: response,
        // });
      })
      .catch((err) => {
        console.log('signUp err ', err);
      });
  };
};
