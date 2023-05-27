import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const PlayListCard = ({data}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.cardsContainer}>
      {data.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.7}
            style={styles.subcontainer}
            onPress={() => navigation.navigate('/Tracklist')}>
            <View style={styles.imageWrapper}>
              <Image source={item?.artist} alt="" style={styles.image} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>{item?.name}</Text>
              <Text style={styles.tracks}>{item?.tracks} Tracks</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default PlayListCard;

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
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
