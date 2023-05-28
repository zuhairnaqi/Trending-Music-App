import NavigationContainer from './NavigationContainer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {requestAccessToken} from '../../modules/Auth/store/auth.actions';

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      requestAccessToken,
    },
    dispatch,
  );

const mapStateToProps = state => {
  const {auth} = state;
  return {
    isLoggedIn: auth.isLoggedIn,
    authFailer: auth.authFailer,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavigationContainer);
