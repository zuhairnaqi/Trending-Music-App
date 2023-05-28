import React, {useEffect, useState, Children} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import PlaylistCard from '../../components/PlayListCard';
import Singer from '../../../assets/atif.jpg';
import styles from './style';
import DeviceCountry from 'react-native-device-country';
import {getTrendingPlaylist} from '../../core/services/spotify/spotify.service';

const Playlist = () => {
  const [playlists, setPlaylists] = useState([]);
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    DeviceCountry.getCountryCode()
      .then(result => {
        getTrendingPlaylist({
          country: result.code.toUpperCase(),
          offset: 0,
          limit: 20,
        })
          .then(response => {
            if (
              response.playlists &&
              response.playlists.items &&
              response.playlists.items.length > 0
            ) {
              setPlaylists(response.playlists.items);
            }
          })
          .catch(err => {
            console.log('err', err);
          });
      })
      .catch(e => {
        console.log(e);
      });
  }, []);


  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={styles.backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <View>
          <View style={styles.headerWrap}>
            <Text style={styles.headerText}>Listen to Music you love</Text>
          </View>
          <View style={styles.headingWrap}>
            <Text style={styles.heading}>Recommended playlists</Text>
          </View>
          <View style={styles.cardsContainer}>
            {playlists.length > 0 &&
              Children.toArray(
                playlists.map(playlist => <PlaylistCard playlist={playlist} />),
              )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Playlist;
