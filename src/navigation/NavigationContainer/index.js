import NavigationContainer from './NavigationContainer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {identifyAuthUser} from '../../modules/Auth/store/auth.actions';

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      identifyAuthUser,
    },
    dispatch,
  );

const mapStateToProps = state => {
  const {auth} = state;
  return {
    token: auth.token,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavigationContainer);
