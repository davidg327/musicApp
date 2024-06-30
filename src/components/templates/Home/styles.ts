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
  textPrincipal: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
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
