import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../../utils/Colors.ts';

const {width, height} = Dimensions.get('window');

const style = StyleSheet.create({
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
  textTitle: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  containerCountry: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textCountry: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
  textPrincipal: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  image: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: width * 0.05,
  },
  textEmpty: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: '15%',
  },
});

export default style;
