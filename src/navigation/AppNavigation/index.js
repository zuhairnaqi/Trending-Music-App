import AppNavigator from './AppNavigator';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {callInProcess} from '../../store/core/core.actions';

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      callInProcess,
    },
    dispatch,
  );

const mapStateToProps = state => {
  const {auth} = state;
  return {
    isLoggedIn: auth.isLoggedIn,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
