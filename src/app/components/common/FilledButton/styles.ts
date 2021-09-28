import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/Colors';

const styles = StyleSheet.create({
  button: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  large: {
    width: '90%',
  },
  short: {
    width: 165,
    height: 50,
  },
  filter: {
    width: '31.5%',
  },
  cancel: {
    backgroundColor: Colors.red1,
  },
  approve: {
    backgroundColor: Colors.green1,
  },
  disabled: {
    backgroundColor: Colors.greenDisabled,
  },
  text: {
    fontStyle: 'normal',
    lineHeight: 18.75,
    fontWeight: '700',
    fontSize: 16,
    color: Colors.white,
  },
  filterText: {
    fontStyle: 'normal',
    textAlign: 'center',
    lineHeight: 14,
    fontWeight: '700',
    fontSize: 12,
  },
});

export default styles;
