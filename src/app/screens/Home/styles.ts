import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../theme/Colors';

const {height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
  },
  titleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 200,
  },
  title: {
    fontSize: 30,
  },
  contentContainer: {
    height: screenHeight - 330,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default styles;
