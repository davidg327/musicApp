import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/Colors.ts';

const styles = StyleSheet.create({
  load: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});

export default styles;
