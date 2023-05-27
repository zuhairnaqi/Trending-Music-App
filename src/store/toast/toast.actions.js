export const SHOW_TOAST = 'SHOW_TOAST';

export const showToast = ({ message }) => {
    return {
        type: SHOW_TOAST,
        payload: {
            message,
        },
    };
};