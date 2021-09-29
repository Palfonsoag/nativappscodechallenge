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
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    marginVertical: 24,
    alignItems: 'center',
  },
  imageSection: {
    width: '100%',
    height: '35%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSection: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',

    justifyContent: 'space-around',
    alignItems: 'center',
  },
  descriptionSection: {
    width: '100%',
    height: '55%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default styles;
