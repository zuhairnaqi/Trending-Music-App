import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from '../AppNavigation';
import {rootNavigationRef} from '../RootNavigation';

const NavigatorContainer = ({token, identifyAuthUser}) => {
  return (
    <NavigationContainer ref={rootNavigationRef}>
      <AppNavigator />
    </NavigationContainer>
  );
};

NavigatorContainer.propTypes = {};

export default NavigatorContainer;
