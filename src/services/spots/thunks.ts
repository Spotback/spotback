import axios from 'axios';
import { SPOTS_BASE_URL } from '@env';
import * as RootNavigation from '@navigation/RootNavigation';
import { v4 as uuidv4 } from 'uuid';
import { setAsyncStorage, getAsyncStorage } from '@utils/asyncStorage';
import { SpotTypes } from './types';

console.log(`${SPOTS_BASE_URL}/createSpot`);

export const postSpot = (
  bearer: string,
  coordinates: string,
  car: Record<string, any>,
  spotType: string,
  leaveTime: number
) => {
  return (dispatch: any) => {
    console.log('spots thunk ', bearer, 'coordinates ', coordinates, car, spotType, leaveTime);
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
          headers: { 'spotback-correlation-id': uuidv4(), Bearer: bearer },
        }
      )
      .then((res) => {
        console.log('res ', res);
        // dispatch({
        //   type: SpotTypes.POST_SPOT,
        //   payload: res.data,
        //   headers: res.headers,
        // });
        RootNavigation.navigate('SearchingForMatch');
      })
      .catch((err) => {
        console.log('err ', err.response.data);
      });
  };
};
