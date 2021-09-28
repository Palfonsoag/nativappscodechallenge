import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/Colors';

const styles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    flexDirection: 'row',
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: Colors.gray1,
    borderTopWidth: 1,
    backgroundColor: Colors.white,
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '33%',
  },
  footerIcons: {
    resizeMode: 'contain',
    height: 55,
    width: 55,
  },
});

export default styles;
