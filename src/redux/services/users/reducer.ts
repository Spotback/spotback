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

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
