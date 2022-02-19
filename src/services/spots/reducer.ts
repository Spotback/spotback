import { SpotTypes } from './types';

const initialState = { coordinates: '', car: {}, spotType: '', leaveTime: 0 };

const spotReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SpotTypes.POST_SPOT:
      console.log('post spot ', action);
      return {};

    default:
      return state;
  }
};
console.log('spotReducer', initialState);
export default spotReducer;
