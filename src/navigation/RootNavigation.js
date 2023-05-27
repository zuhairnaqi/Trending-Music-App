import React from 'react';
import {StackActions, CommonActions} from '@react-navigation/native';

export const rootNavigationRef = React.createRef();

export const navigate = (name, params) => {
  rootNavigationRef.current?.navigate(name, params);
};

export const pushView = (...args) => {
  rootNavigationRef.current?.dispatch(StackActions.push(...args));
};

export const replaceView = (...args) => {
  rootNavigationRef.current?.dispatch(StackActions.replace(...args));
};

export const popView = (...args) => {
  rootNavigationRef.current?.dispatch(CommonActions.pop(...args));
};

export const getCurrentRoute = () =>
  rootNavigationRef.current?.getCurrentRoute();

export const setParams = params => rootNavigationRef.current?.setParams(params);

export const resetStack = params =>
  rootNavigationRef.current?.dispatch(CommonActions.reset(params));

export const goBack = () => {
  rootNavigationRef.current?.dispatch(CommonActions.goBack());
};

export const goBackResetScreen = resetScreen =>
  rootNavigationRef.current?.dispatch(state => {
    // Remove the home route from the stack
    const routes = state.routes.filter(r => r.name !== resetScreen);
    return CommonActions.reset({
      ...state,
      routes,
      index: routes.length - 1,
    });
  });

export const goBackPossible = navigation => {
  let canGoBack = navigation.canGoBack();
  // handle what we do it we can/cannot go back
  if (canGoBack) {
    navigation.goBack();
  }
};
