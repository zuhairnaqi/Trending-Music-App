
import React, {useEffect, useState} from 'react';
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
import styles from './style'
import { getTrackDetails } from '../../core/services/spotify/spotify.service';
import { msToDurationString } from '../../core/services/core/date-time-util.service';

const TrackDetails = () => {
    const [trackDetails, setTrackDetails] = useState()
    const route = useRoute();
    const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    getTrackDetails(route.params.trackId)
      .then(response => {
        if (response) {
            const duration = msToDurationString(response.duration_ms)
            setTrackDetails({...response, duration})
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
            {!!trackDetails && (
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.backgroundStyle}>
                    <View style={styles.container}>
                        <View style={styles.imageHeader}>
                            <Image source={{uri: trackDetails.album.images[0].url}} style={styles.coverImage} />
                        </View>
                        <View style={styles.detailWrap}>
                            <View style={styles.subDetailWrap}>
                                <Text style={styles.property}>Name</Text>
                                <Text style={styles.value}>{trackDetails.name}</Text>
                            </View>
                            <View style={styles.subDetailWrap}>
                                <Text style={styles.property}>Artist</Text>
                                <Text style={styles.value}>{trackDetails.artists[0].name}</Text>
                            </View>
                            <View style={styles.subDetailWrap}>
                                <Text style={styles.property}>Album</Text>
                                <Text style={styles.value}>{trackDetails.album.name}</Text>
                            </View>
                            <View style={styles.subDetailWrap}>
                                <Text style={styles.property}>Duration</Text>
                                <Text style={styles.value}>{trackDetails.duration}</Text>
                            </View>

                        </View>
                    </View>
                </ScrollView>
            )}
        </SafeAreaView>
    );
}



export default TrackDetails;
