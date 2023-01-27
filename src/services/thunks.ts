import {
  CAR_PROFILE_PICTURE_KEY,
  CAR_PROFILE_PICTURE_URL,
  MATCHING_BASE_URL,
  SPOTS_BASE_URL,
  USERS_BASE_URL,
} from '@env';
import * as RootNavigation from '@navigation/RootNavigation';
import database from '@react-native-firebase/database';
import { setAsyncStorage } from '@utils/asyncStorage';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { UserTypes } from './types';

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

const saveCarPictureToFirebase = (carLink, email) => {
  const dbCarPictureRef = database().ref(
    `car_pictures_urls/${email.replace('@', '_').replace('.', '_')}`
  );

  dbCarPictureRef.set({
    url: carLink,
  });
};

export const fetchCarPicture = (
  make: string,
  model: string,
  color: string,
  year: number,
  email: string
) => {
  return (dispatch: any) => {
    dispatch({
      type: UserTypes.SPINNER,
      payload: true,
    });
    axios
      .get(
        `${CAR_PROFILE_PICTURE_URL}/images?key=${CAR_PROFILE_PICTURE_KEY}&year=${year}&make=${make}&model=${model}&color=${color}&photoType=exterior&angle=front`
      )
      .then((res) => {
        const carPictureObject = res.data.images[0];
        saveCarPictureToFirebase(carPictureObject.link, email);
        dispatch({ type: UserTypes.SAVE_CAR_PICTURE, payload: carPictureObject.link });
      })
      .catch((err) => {
        console.log('Error retrieving Car Picture from carsxe API ====>', err);
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

export const match = (bearer: string, currentLocation: string, desiredLocation: string) => {
  console.log('coordinates on submit match =>', bearer, currentLocation, desiredLocation);
  return (dispatch: any) => {
    RootNavigation.navigate('SearchingForMatch');
    axios
      .post(
        `${MATCHING_BASE_URL}/match`,
        {
          currentLocation,
          desiredLocation,
        },
        {
          headers: { 'spotback-correlation-id': uuidv4(), Bearer: bearer },
        }
      )
      .then((res) => {
        console.log('res =>', res);
        dispatch({
          type: UserTypes.MATCH,
          payload: res.data,
        });
        RootNavigation.navigate('SpotExchange');
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

export const triggerSpinner = () => {
  // A solution to the profile pic not re rendering on the home page. Also tells the user their pic was saved.
  return (dispatch: any) => {
    dispatch({
      type: UserTypes.SPINNER,
      payload: true,
    });
    setTimeout(() => {
      console.log('Delayed for 2 second.');
      dispatch({
        type: UserTypes.SPINNER,
        payload: false,
      });
    }, 1000);
  };
};
