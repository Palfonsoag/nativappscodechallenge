import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/Colors';

const styles = StyleSheet.create({
  inputContainerStyle: {
    width: '90%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.gray1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 15,
    marginTop: 15,
  },
  textSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputStyle: {
    width: '80%',
    padding: 0,
  },
  iconStyle: {
    resizeMode: 'contain',
    width: 16,
    height: 16,
  },
  actionSection: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
