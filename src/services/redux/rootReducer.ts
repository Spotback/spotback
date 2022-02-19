import { combineReducers } from 'redux';
import userReducer from '../users/reducer';
import spotsReducer from '../spots/reducer';

const rootReducer = combineReducers({
  userReducer,
  spotsReducer,
});
export default rootReducer;
