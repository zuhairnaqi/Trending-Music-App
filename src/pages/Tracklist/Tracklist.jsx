import React, {useEffect, c, useState, Children} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Singer from '../../../assets/atif.jpg';
import TrackCard from '../../components/TrackCard';
import styles from './style';
import {getTracks} from '../../core/services/spotify/spotify.service';

const Tracklist = () => {
  const [playlistDetails, setPlaylistDetails] = useState({});
  const [tracks, setTracks] = useState([]);
  const route = useRoute();
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    if (route.params) {
        setPlaylistDetails(route.params)
    }
    getTracks(route.params.playlistId)
      .then(response => {
        if (response.items && response.items.length > 0) {
          setTracks(response.items);
        }
      })
      .catch(err => {
        console.log('err', err);
      });
  }, [route.params]);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'white'}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <View style={styles.container}>
          <View style={styles.imageHeader}>
            <Image source={{uri: playlistDetails.imageURL }} style={styles.coverImage} />
          </View>
          <Text style={styles.mainHead}>{playlistDetails.playlistName}</Text>
          <View>
            {tracks.length > 0 &&
              Children.toArray(
                tracks.map(item => <TrackCard item={item} />),
              )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Tracklist;
