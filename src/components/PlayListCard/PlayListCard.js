import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const PlayListCard = ({playlist}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.subcontainer}
      onPress={() =>
        navigation.navigate('/Tracklist', {
          playlistName: playlist?.name,
          playlistId: playlist.id,
          imageURL: playlist?.images[0]?.url,
        })
      }>
      <View style={styles.imageWrapper}>
        <Image
          source={{uri: playlist?.images[0]?.url}}
          alt=""
          style={styles.image}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{playlist?.name}</Text>
        <Text style={styles.tracks}>{playlist?.tracks?.total} Tracks</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlayListCard;

const styles = StyleSheet.create({
  subcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
  imageWrapper: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  details: {
    marginTop: 5,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    fontWeight: '800',
  },
  tracks: {
    textAlign: 'center',
    fontSize: 14,
    color: 'lightgray',
  },
});
