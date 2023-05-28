import {
  REQUEST_ACCESS_TOKEN_SUCCESS,
  REQUEST_ACCESS_TOKEN_FAILURE,
} from './auth.actions';

const INITIAL_STATE = {
  isLoggedIn: false,
  authFailer: '',
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_ACCESS_TOKEN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case REQUEST_ACCESS_TOKEN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        authFailer:
          action.payload || 'Something went wrong, please try again later',
      };
    default:
      return state;
  }
};

export default authReducer;
