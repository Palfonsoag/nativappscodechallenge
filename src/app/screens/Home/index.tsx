import React from 'react';
import {View} from 'react-native';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import BorderButton from '../../components/common/BorderButton';
import {Colors} from '../../theme/Colors';
import Styles from './styles';

type Props = {
  navigation: any;
};

const Home = ({navigation}: Props) => {
  const navigateTo = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <View style={Styles.screenContainer}>
      <Header navigation={navigation} screenTitle="Home" />
      <View style={Styles.contentContainer}>
        <BorderButton
          label="Start Report"
          labelColor={Colors.green1}
          borderColor={Colors.green1}
          onPress={() => navigateTo('StartReport')}
        />
        <BorderButton
          label="View Reports"
          labelColor={Colors.orange}
          borderColor={Colors.orange}
          onPress={() => navigateTo('ViewReport')}
        />
      </View>
      <Footer />
    </View>
  );
};

export default Home;
