
import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import Singer from '../../../assets/atif.jpg';
import TrackCard from '../../components/TrackCard';
import styles from './style';

const Tracklist = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const data = [
        {
            artistName: "Atif Aslam",
            name: "Band",
            image: Singer,
            popularity: "2889,000"
        },
        {
            artistName: "Atif Aslam",
            name: "Band",
            image: Singer,
            popularity: "2889,000"
        },
        {
            artistName: "Atif Aslam",
            name: "Band",
            image: Singer,
            popularity: "2889,000"
        },
        {
            artistName: "Atif Aslam",
            name: "Band",
            image: Singer,
            popularity: "2889,000"
        },
        {
            artistName: "Atif Aslam",
            name: "Band",
            image: Singer,
            popularity: "2889,000"
        },
        {
            artistName: "Atif Aslam",
            name: "Band",
            image: Singer,
            popularity: "2889,000"
        },
        {
            artistName: "Atif Aslam",
            name: "Band",
            image: Singer,
            popularity: "2889,000"
        },

    ]

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
                        <Image source={Singer} style={styles.imgaeMain} />
                    </View>
                    <Text style={styles.mainHead}>Atif Aslam</Text>

                    <TrackCard data={data} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}



export default Tracklist;
