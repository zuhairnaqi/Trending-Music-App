import React, {useState} from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Tracklist from '../../pages/Tracklist';
import Playlist from '../../pages/Playlist/Playlist';
import TrackDetails from '../../pages/TrackDetails/TrackDetail';
const Stack = createStackNavigator();

const AppNavigator = () => {
  const [initialLoading, setInitialLoading] = useState(true);

  const loader = () => {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  // if (initialLoading) {
  //   return loader();
  // }
  return (
    <View style={styles.shownContent}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="/"
          options={{headerShown: false}}
          component={Playlist}
        />
        <Stack.Screen
          name="/Tracklist"
          options={{headerShown: false}}
          component={Tracklist}
        />
        <Stack.Screen
          name="/TrackDetails"
          options={{headerShown: false}}
          component={TrackDetails}
        />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  shownContent: {
    flex: 1,
    opacity: 1,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppNavigator.propTypes = {};

export default AppNavigator;
