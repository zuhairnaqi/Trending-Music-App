import TrackDetail from './TrackDetail';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, authWithFacebook, authWithGoogle } from '../../modules/Auth/store/auth.actions';
import { callInProcess } from '../../store/core/core.actions';

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            login,
            authWithFacebook,
            authWithGoogle,
            callInProcess,
        },
        dispatch,
    );

const mapStateToProps = state => {
    const { auth, core } = state;
    return {
        isLoading: core.callInProcess,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackDetail);
