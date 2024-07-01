import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/Colors.ts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.black,
  },
  line: {
    width: '90%',
    alignSelf: 'center',
    height: 0.5,
    backgroundColor: Colors.black,
    marginTop: 5,
  },
});

export default styles;
