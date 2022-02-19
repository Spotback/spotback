import axios from 'axios';
import { USERS_BASE_URL, SPOTS_BASE_URL } from '@env';
import * as RootNavigation from '@navigation/RootNavigation';
import { v4 as uuidv4 } from 'uuid';
import { setAsyncStorage, getAsyncStorage } from '@utils/asyncStorage';
import { SpotTypes } from './types';

console.log(`${SPOTS_BASE_URL}/createSpot`);

export const postSpot = (
  coordinates: string,
  car: Record<string, any>,
  spotType: string,
  leaveTime: number
) => {
  return (dispatch: any) => {
    axios
      .post(
        `${SPOTS_BASE_URL}/createSpot`,
        {
          coordinates,
          car,
          spotType,
          leaveTime,
        },
        {
          headers: { 'spotback-correlation-id': uuidv4() },
        }
      )
      .then((res) => {
        console.log('res ', res);
        dispatch({
          type: SpotTypes.POST_SPOT,
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
