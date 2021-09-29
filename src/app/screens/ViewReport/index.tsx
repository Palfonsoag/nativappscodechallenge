import React from 'react';
import {View} from 'react-native';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Styles from './styles';

type Props = {
  navigation: any;
};

const ViewReport = ({navigation}: Props) => {
  const navigateTo = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <View style={Styles.screenContainer}>
      <Header navigation={navigation} screenTitle="View Reports" backOption />
      <View style={Styles.contentContainer}></View>
      <Footer />
    </View>
  );
};

export default ViewReport;
