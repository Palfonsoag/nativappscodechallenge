import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/Colors';

const styles = StyleSheet.create({
  cardContainer: {
    width: '95%',
    height: 200,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.gray1,
    borderRadius: 3,
    marginVertical: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  sectionContainer: {
    marginLeft: 5,
    display: 'flex',
    width: '55%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  image: {
    resizeMode: 'contain',
    width: 180,
    height: 180,
  },
  description: {
    fontStyle: 'normal',
    fontSize: 13,
    lineHeight: 18.75,
    fontWeight: '400',
    letterSpacing: 0,
    textAlign: 'left',
  },
});

export default styles;
