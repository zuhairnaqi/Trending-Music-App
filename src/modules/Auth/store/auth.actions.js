export const REQUEST_ACCESS_TOKEN = 'REQUEST_ACCESS_TOKEN';
export const REQUEST_ACCESS_TOKEN_SUCCESS = 'REQUEST_ACCESS_TOKEN_SUCCESS';
export const REQUEST_ACCESS_TOKEN_FAILURE = 'REQUEST_ACCESS_TOKEN_FAILURE';

export const requestAccessToken = payload => ({
  type: REQUEST_ACCESS_TOKEN,
  payload,
});

export const requestAccessTokenSuccess = () => ({
  type: REQUEST_ACCESS_TOKEN_SUCCESS,
});

export const requestAccessTokenFailure = errorMsg => ({
  type: REQUEST_ACCESS_TOKEN_FAILURE,
  payload: errorMsg,
});
