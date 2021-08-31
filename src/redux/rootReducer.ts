import { combineReducers } from 'redux';
import userReducer from './services/users/reducer';
const rootReducer = combineReducers({
  userReducer,
});
export default rootReducer;
