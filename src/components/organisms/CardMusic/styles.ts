import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../../utils/Colors.ts';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    alignSelf: 'center',
    padding: 10,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: Colors.white,
    marginBottom: 20,
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  containerInfo: {
    flexDirection: 'row',
  },
  image: {
    width: width * 0.2,
    height: height * 0.1,
  },
  containerText: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    width: width * 0.4,
  },
  textListener: {
    color: Colors.white,
    fontSize: 8,
    fontWeight: '300',
  },
  textName: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  textArtist: {
    color: Colors.white,
    fontSize: 12,
    marginTop: 5,
    fontWeight: '300',
  },
  containerIcon: {
    backgroundColor: Colors.gray,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default styles;
