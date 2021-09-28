import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/Colors';

const styles = StyleSheet.create({
  contentView: {flex: 1, backgroundColor: Colors.white},
  upperView: {flex: 1, justifyContent: 'center'},
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
});

export default styles;
