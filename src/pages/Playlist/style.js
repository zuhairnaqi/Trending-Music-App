import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#1c352d',
  },
  headerWrap: {
    height: 50,
    justifyContent: 'center',
    paddingStart: 20,
    backgroundColor: '#006b3c',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    letterSpacing: 2,
  },
  headingWrap: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: '900',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

export default styles;
