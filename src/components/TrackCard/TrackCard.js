import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Play from '../../../assets/play.png';

const TrackCard = ({item}) => {
  const navigation = useNavigation();
  const {track} = item;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.subcontainer}
      onPress={() => navigation.navigate('/TrackDetails', {trackId: track.id})}>
      <View style={styles.detailsWrap}>
        <View style={styles.imageWrapper}>
          <Image
            source={{uri: track?.album.images[0].url}}
            alt=""
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{track?.name}</Text>
          <Text style={styles.tracks}>Singer: {track?.artists[0].name}</Text>
          <Text style={styles.tracks}>Popularity: {track?.popularity}</Text>
        </View>
      </View>

      <View style={styles.playImageWrapper}>
        <Image source={Play} alt="" style={styles.playImage} />
      </View>
    </TouchableOpacity>
  );
};

export default TrackCard;

const styles = StyleSheet.create({
  subcontainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    gap: 10,
    justifyContent: 'space-between',
    width: '100%',
  },
  imageWrapper: {
    width: 60,
    height: 60,
    borderRadius: 2,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 2,
  },
  detailsWrap: {
    flexDirection: 'row',
    gap: 10,
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontWeight: '800',
  },
  tracks: {
    fontSize: 14,
    color: 'lightgray',
  },
  playImageWrapper: {
    width: 40,
    height: 40,
  },
  playImage: {
    width: '100%',
    height: '100%',
  },
});
