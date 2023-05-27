import { combineEpics, select } from 'redux-most';
import { empty } from 'most';
import { SHOW_TOAST } from './toast.actions';
import Toast from 'react-native-simple-toast';

const toastEpic = $actions =>
    $actions.thru(select(SHOW_TOAST)).flatMap(action => {
        const { message } = action.payload;
        if (message) {
            Toast.showWithGravity(message, Toast.SHORT, Toast.BOTTOM);
        }
        return empty();
    });

export default combineEpics([toastEpic]);