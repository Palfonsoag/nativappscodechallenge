import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../theme/Colors';

const {height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
  },
  contentContainer: {
    height: screenHeight - 60 - 70,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default styles;
