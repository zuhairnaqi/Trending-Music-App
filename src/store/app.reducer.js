import {combineReducers} from 'redux';
import authReducer from '../modules/Auth/store/auth.reducer';

export default combineReducers({
  auth: authReducer,
});
