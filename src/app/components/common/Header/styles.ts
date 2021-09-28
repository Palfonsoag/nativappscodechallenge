import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
  logo: {
    resizeMode: 'contain',
    height: 40,
    width: 140,
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
  },
});

export default styles;
