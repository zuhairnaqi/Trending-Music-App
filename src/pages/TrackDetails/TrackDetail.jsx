
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
import styles from './style'

const TrackDetails = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: "#1c352d",
        flex: 1
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={'white'}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <View style={styles.container}>
                    <View style={styles.imageHeader}>
                        <Image source={Singer} style={styles.imgaeMain} />
                    </View>
                    <View style={styles.detailWrap}>
                        <View style={styles.subDetailWrap}>
                            <Text style={styles.property}>Name</Text>
                            <Text style={styles.value}>Tere Bin</Text>
                        </View>
                        <View style={styles.subDetailWrap}>
                            <Text style={styles.property}>Artist</Text>
                            <Text style={styles.value}>Atif Aslam</Text>
                        </View>
                        <View style={styles.subDetailWrap}>
                            <Text style={styles.property}>Album</Text>
                            <Text style={styles.value}>Hip Hop</Text>
                        </View>
                        <View style={styles.subDetailWrap}>
                            <Text style={styles.property}>Duration</Text>
                            <Text style={styles.value}>3min 10sec</Text>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}



export default TrackDetails;
