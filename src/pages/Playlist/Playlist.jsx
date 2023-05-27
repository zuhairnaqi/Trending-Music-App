import React from 'react';
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
import styles from './style'



const Playlist = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: "#1c352d",
    };

    const data = [
        {
            artist: Singer,
            name: "Atif Aslam",
            tracks: "200"
        },
        {
            artist: Singer,
            name: "Atif Aslam",
            tracks: "200"
        },
        {
            artist: Singer,
            name: "Atif Aslam",
            tracks: "200"
        },
        {
            artist: Singer,
            name: "Atif Aslam",
            tracks: "200"
        },
        {
            artist: Singer,
            name: "Atif Aslam",
            tracks: "200"
        },
        {
            artist: Singer,
            name: "Atif Aslam",
            tracks: "200"
        },
        {
            artist: Singer,
            name: "Atif Aslam",
            tracks: "200"
        },
        {
            artist: Singer,
            name: "Atif Aslam",
            tracks: "200"
        },
        {
            artist: Singer,
            name: "Atif Aslam",
            tracks: "200"
        },
        {
            artist: Singer,
            name: "Atif Aslam",
            tracks: "200"
        },
        {
            artist: Singer,
            name: "Atif Aslam",
            tracks: "200"
        },

    ]

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <View>
                    <View style={styles.headerWrap}>
                        <Text style={styles.headerText}>Good Afternoon</Text>
                    </View>
                    <View style={styles.headingWrap}>
                        <Text style={styles.heading}>Recommended playlists</Text>
                    </View>
                    <PlaylistCard data={data} />

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}



export default Playlist;
