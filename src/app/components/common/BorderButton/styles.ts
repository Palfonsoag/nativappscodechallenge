import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/Colors';

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: Colors.black,
    width: 165,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  large: {
    width: '90%',
  },
  short: {
    width: '31.5%',
  },
  iconStyle: {
    resizeMode: 'contain',
    width: 18,
    height: 18,
    marginRight: 5,
  },
  text: {
    fontStyle: 'normal',
    textAlign: 'center',
    lineHeight: 18.75,
    fontWeight: '700',
    fontSize: 16,
  },
});

export default styles;
