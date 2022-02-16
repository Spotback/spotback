import { UserTypes } from './types';

const initialState = {
  isloggedIn: false,
  referrals: [],
  verified: false,
  freeSpots: 0,
  balance: 0,
  rating: 0,
  _id: '',
  car: {
    licencePlate: '',
    carType: '',
    color: '',
    make: '',
    model: '',
    year: '',
  },
  email: '',
  firstName: '',
  lastName: '',
  phone: '',
  referralCode: '',
  stripeToken: '',
  bearer: '',
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UserTypes.SIGN_UP:
      console.log('sign up reducer ', action);
      return {
        ...state,
        isloggedIn: true,
        referrals: action.payload.user.referrals,
        verified: action.payload.user.verified,
        // // data is returned through user object except for freespots and headers
        freeSpots: action.payload.freeSpots,
        balance: action.payload.user.balance,
        rating: action.payload.user.rating,
        _id: action.payload.user._id,

        email: action.payload.user.email,
        firstName: action.payload.user.firstName,
        lastName: action.payload.user.lastName,
        phone: action.payload.user.phone,
        referralCode: action.payload.user.referralCode,
        stripeToken: action.payload.user.stripeToken,
        bearer: action.headers.bearer,
      };
    case UserTypes.LOG_IN:
      console.log('log in reducer ', action);
      return {
        ...state,
        isloggedIn: true,
        referrals: action.payload.referrals,
        verified: action.payload.verified,
        freeSpots: action.payload.freeSpots,
        balance: action.payload.balance,
        rating: action.payload.rating,
        _id: action.payload._id,
        car: {
          licencePlate: action.payload.car.licencePlate,
          carType: action.payload.car.carType,
          color: action.payload.car.color,
          make: action.payload.car.make,
          model: action.payload.car.model,
          year: action.payload.car.year,
        },
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        phone: action.payload.phone,
        referralCode: action.payload.referralCode,
        stripeToken: action.payload.stripeToken,
        bearer: action.headers.bearer,
      };
    case UserTypes.UPDATE:
      console.log('update reducer ', action);
      return {
        ...state,
        car: {
          licencePlate: action.payload.car.licencePlate,
          carType: action.payload.car.carType,
          color: action.payload.car.color,
          make: action.payload.car.make,
          model: action.payload.car.model,
          year: action.payload.car.year,
        },
      };
    default:
      return state;
  }
};
console.log('userReducer', initialState);
export default userReducer;
