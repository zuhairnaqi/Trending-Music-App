import * as most from 'most';
import {combineEpics, select} from 'redux-most';
import {
  REQUEST_ACCESS_TOKEN,
  requestAccessTokenSuccess,
  requestAccessTokenFailure,
} from './auth.actions';
import {showToast} from '../../../store/toast/toast.actions';
import {getAccessToken} from '../../../core/services/auth/auth.services';
import AuthenticationTokenHelper from '../../../core/helper/AuthenticationTokenHelper';

const requestAccessTokenEpic = ($actions, store) =>
  $actions.thru(select(REQUEST_ACCESS_TOKEN)).flatMap(action => {
    const {clientId, clientSecretKey} = action.payload;
    const payload = {
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecretKey,
    };
    return most
      .fromPromise(getAccessToken(payload))
      .flatMap(response => {
        const {access_token, token_type} = response;
        if (!access_token) {
          return most.from([
            requestAccessTokenFailure(
              'Something went wrong, please try again later',
            ),
          ]);
        }
        AuthenticationTokenHelper.authToken = access_token;
        AuthenticationTokenHelper.tokenType = token_type;
        return most.of(requestAccessTokenSuccess());
      })
      .recoverWith(err => {
        const responseData = JSON.parse(err.responseData);
        return most.from([
          showToast({
            message: 'Something went wrong, please try again later',
          }),
          requestAccessTokenFailure(responseData.error),
        ]);
      });
  });

export default combineEpics([requestAccessTokenEpic]);
