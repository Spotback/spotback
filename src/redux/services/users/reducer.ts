const initialState = {
  loggedIn: false,
  userId: '',
  user: {
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
    password: '',
    phone: '',
  },
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SIGN_UP':
      console.log('reducer ', action);
    default:
      return state;
  }
};

export default userReducer;
