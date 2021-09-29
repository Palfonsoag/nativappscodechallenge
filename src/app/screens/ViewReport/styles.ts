import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../theme/Colors';

const {height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
  },
  listContainer: {
    flexDirection: 'column',
    width: '100%',
    height: screenHeight > 780 ? '90%' : screenHeight > 680 ? '85%' : '82%',
  },
  image: {
    marginVertical: 24,
    alignItems: 'center',
  },
  noRequestContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  notificationContainer: {
    width: '90%',
    height: 247,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderColor: Colors.gray1,
    borderBottomWidth: 0.9,
    borderRightWidth: 0.3,
    borderLeftWidth: 0.3,
    borderTopWidth: 0.25,
    borderRadius: 10,
  },
  notificationText: {
    width: 289,
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: Colors.black,
  },
});

export default styles;
