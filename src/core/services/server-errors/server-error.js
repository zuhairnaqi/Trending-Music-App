import Toast from 'react-native-simple-toast';

export const ServerErrorService = response => {
  let errorMsg = 'Something went wrong!';
  console.log('response => ', response);
  if (response.data?.data?.message) {
    errorMsg = response.data?.data?.message;
  } else if (response?.data?.message) {
    errorMsg = response?.data?.message;
  } else if (response?.data?.details[0]?.message) {
    errorMsg = response?.data?.details[0]?.message;
  } else if (response?.message) {
    errorMsg = response?.message;
  } else if (typeof response === 'string') {
    errorMsg = response;
  }
  if (errorMsg) {
    Toast.showWithGravity(errorMsg, Toast.SHORT, Toast.BOTTOM);
  }
};