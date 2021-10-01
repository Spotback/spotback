const initialState = {
  isloggedIn: false,
  referrals: [],
  verified: false,
  freeSpots: 0,
  balance: 0,
  rating: 0,
  _id: '',
  car: {
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
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SIGN_UP':
      console.log('sign up reducer ', action);
      return {
        ...state,
        isloggedIn: true,
      };
    case 'LOG_IN':
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
      };
    case 'UPDATE':
      console.log('update reducer ', action);
      return {
        ...state,
        car: {
          carType: action.payload.car.carType,
          color: action.payload.car.color,
          make: action.payload.car.make,
          model: action.payload.car.model,
          year: action.payload.car.year,
        },
        email: action.payload.email,
      };
    default:
      return state;
  }
};
console.log('userReducer', initialState);
export default userReducer;
