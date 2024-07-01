import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/Colors.ts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.gray,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  containerSlide: {
    width: '70%',
  },
});

export default styles;
