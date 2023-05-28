import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Config from 'react-native-config';
import AppNavigator from '../AppNavigation';

const NavigatorContainer = ({isLoggedIn, authFailer, requestAccessToken}) => {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    if (isLoggedIn) {
      setInitialLoading(false);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    requestAccessToken({
      clientId: Config.SPOTIFY_CLIENT_ID,
      clientSecretKey: Config.SPOTIFY_CLIENT_SECRET,
    });
  }, [requestAccessToken]);

  if (initialLoading) {
    return (
      <View style={styles.loader}>
        {authFailer ? (
          <Text>{authFailer}</Text>
        ) : (
          <ActivityIndicator size="large" />
        )}
      </View>
    );
  }

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

NavigatorContainer.propTypes = {};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NavigatorContainer;
