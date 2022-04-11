import axios from 'axios';
import { USERS_BASE_URL, SPOTS_BASE_URL, MATCHING_BASE_URL } from '@env';
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
    dispatch({
      type: UserTypes.SPINNER,
      payload: true,
    });
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
        console.log('res ', res);
        setAsyncStorage(res.data.user._id);
        dispatch({
          type: UserTypes.SIGN_UP,
          payload: res.data,
          headers: res.headers,
        });
        RootNavigation.navigate('Home');
      })
      .catch((err) => {
        console.log('err ', err.response.data);
        dispatch({
          type: UserTypes.ERROR,
          payload: err.response.data,
        });
      });
  };
};

export const logIn = (email: string, password: string) => {
  return (dispatch: any) => {
    dispatch({
      type: UserTypes.SPINNER,
      payload: true,
    });
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
        console.log('***** err *****', err.response.data);
        dispatch({
          type: UserTypes.ERROR,
          payload: err.response.data,
        });
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
    dispatch({
      type: UserTypes.SPINNER,
      payload: true,
    });
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
      })
      .catch((err) => {
        console.log('err ', err.response.data);
        dispatch({
          type: UserTypes.ERROR,
          payload: err.response.data,
        });
      });
  };
};

export const postSpot = (
  bearer: string,
  coordinates: string,
  car: Record<string, any>,
  spotType: string,
  leaveTime: number
) => {
  return (dispatch: any) => {
    console.log('spots thunk ', bearer, 'coordinates ', coordinates, car, spotType, leaveTime);
    dispatch({
      type: UserTypes.SPINNER,
      payload: true,
    });
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
        dispatch({
          type: UserTypes.POST_SPOT,
          payload: res.data,
        });
        RootNavigation.navigate('SearchingForMatch');
      })
      .catch((err) => {
        console.log('err ', err.response.data);
        dispatch({
          type: UserTypes.ERROR,
          payload: err.response.data,
        });
      });
  };
};

export const match = (bearer: string, coordinateSet: Record<string, any>) => {
  return (dispatch: any) => {
    console.log('spots thunk ', bearer, 'coordinates ', coordinateSet);
    // dispatch({
    //   type: UserTypes.SPINNER,
    //   payload: true,
    // });
    // axios
    //   .post(
    //     `${MATCHING_BASE_URL}/match`,
    //     {
    //       coordinateSet,
    //     },
    //     {
    //       headers: { 'spotback-correlation-id': uuidv4(), Bearer: bearer },
    //     }
    //   )
    //   .then((res) => {
    //     console.log('res ', res);
    //     dispatch({
    //       type: UserTypes.POST_SPOT,
    //       payload: res.data,
    //     });
    //     RootNavigation.navigate('SearchingForMatch');
    //   })
    //   .catch((err) => {
    //     console.log('err ', err.response.data);
    //     dispatch({
    //       type: UserTypes.ERROR,
    //       payload: err.response.data,
    //     });
    //   });
  };
};

export const pinnedCoordinates = (pinnedCoordinates: string) => {
  return (dispatch: any) => {
    dispatch({
      type: UserTypes.PINNED_COORDINATES,
      payload: pinnedCoordinates,
    });
  };
};

export const clearUserError = () => {
  return (dispatch: any) => {
    dispatch({
      type: UserTypes.ERROR,
      payload: {},
    });
  };
};
