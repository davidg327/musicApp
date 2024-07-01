import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../../../utils/Colors.ts';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height * 0.05,
    paddingHorizontal: width * 0.05,
    backgroundColor: Colors.primary,
  },
  goBack: {
    position: 'absolute',
    top: height * 0.04,
    left: width * 0.05,
    padding: 10,
    zIndex: 1,
  },
  image: {
    width: width * 0.8,
    alignSelf: 'center',
    height: height * 0.35,
    marginTop: 50,
  },
  textName: {
    marginTop: 20,
    color: Colors.white,
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 20,
  },
  textArtist: {
    marginTop: 10,
    color: Colors.white,
    fontSize: 12,
    fontWeight: '300',
    marginLeft: 20,
  },
  textDescription: {
    marginTop: 10,
    color: Colors.white,
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 20,
  },
  description: {
    marginTop: 10,
    color: Colors.white,
    fontSize: 14,
    fontWeight: '300',
    marginLeft: 20,
    marginBottom: 30,
  },
});

const stylesHtml = StyleSheet.create({
  a: {
    fontWeight: '300',
    color: '#FF3366', // make links coloured pink
  },
  div: {
    color: Colors.white, // color del texto en blanco
  },
});

export {styles, stylesHtml};
