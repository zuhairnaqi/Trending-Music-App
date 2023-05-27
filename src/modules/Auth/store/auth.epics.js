import {combineEpics, select} from 'redux-most';
import * as most from 'most';
import {LOGIN, loginSuccess} from './auth.actions';
import {callInProcess} from '../../../store/core/core.actions';
import {showToast} from '../../../store/toast/toast.actions';
import {login} from '../../../core/services/auth/auth.services';
import AuthenticationTokenHelper from '../../../core/helper/AuthenticationTokenHelper';
import {navigate, resetStack} from '../../../navigation/RootNavigation';

const loginEpic = ($actions, store) =>
  $actions.thru(select(LOGIN)).flatMap(action => {
    return most
      .fromPromise(login(action.payload))
      .flatMap(response => {
        const {token} = response;
        AuthenticationTokenHelper.authToken = token;
        resetStack({
          index: 0,
          routes: [{name: 'TabNavigator'}],
        });
        return most.from([
          loginSuccess({
            token,
          }),
          callInProcess(false),
          showToast({
            message: 'Login Successfully',
            type: 'success',
          }),
        ]);
      })
      .recoverWith(err => {
        return most.of(callInProcess(false));
      });
  });

export default combineEpics([loginEpic]);
