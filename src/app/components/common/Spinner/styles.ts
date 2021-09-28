import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/Colors';

const styles = StyleSheet.create({
  spinnerContainerStyle: {
    backgroundColor: Colors.transparentOpacity,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    zIndex: 1000000,
    elevation: 3,
  },
  spinnerTextStyle: {color: Colors.green1, fontSize: 20, marginTop: 50},
});

export default styles;
