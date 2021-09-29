import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/Colors';

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blueFacebook,
  },
  logoContainer: {
    width: '90%',
    alignItems: 'center',
    paddingRight: 60,
  },
  backContainer: {
    width: '10%',
    paddingLeft: 20,
  },

  back: {
    resizeMode: 'contain',
    width: 25,
    height: 30,
  },
  headerTitle: {
    lineHeight: 26,
    fontSize: 20,
    fontWeight: '400',
    color: Colors.white,
  },
});

export default styles;
