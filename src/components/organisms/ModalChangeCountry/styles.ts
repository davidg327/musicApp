import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/Colors.ts';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  containerModal: {
    backgroundColor: Colors.white,
    paddingTop: '3%',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    paddingBottom: '9%',
    height: '40%',
  },
  textTitle: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    fontWeight: '700',
    color: Colors.black,
    marginBottom: 20,
  },
});

export default styles;
