import {combineEpics} from 'redux-most';
import toastEpics from './toast/toast.epics';
import authEpics from '../modules/Auth/store/auth.epics';

const rootEpic = combineEpics([toastEpics, authEpics]);

export default rootEpic;
