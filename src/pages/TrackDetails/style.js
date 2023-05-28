import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#1c352d',
    flex: 1,
  },

  imageHeader: {
    width: '100%',
    height: 400,
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
  mainHead: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    fontWeight: '800',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  subDetailWrap: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  property: {
    color: 'lightgray',
    fontSize: 18,
  },
  value: {
    color: 'white',
    fontSize: 22,
    marginBottom: 10,
  },
  detailWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default styles;
