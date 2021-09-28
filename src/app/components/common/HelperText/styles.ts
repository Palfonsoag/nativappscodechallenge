import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/Colors';
const styles = StyleSheet.create({
  helperTextContainer: {
    width: '90%',
    marginLeft: 5,
    marginTop: 5,
    marginBottom: -5,
  },
  errorText: {
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.red1,
  },
});
export default styles;
