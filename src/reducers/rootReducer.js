import { combineReducers } from 'redux';
import hobbyReducer from './hobbyReducer';
import userReducer from './userReducer';

// Tong hop cac reducer lai
const rootReducer = combineReducers({
  hobby: hobbyReducer,
  user: userReducer,
});

export default rootReducer;
