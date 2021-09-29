import React from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import ImagePicker, {ImagePickerResponse} from 'react-native-image-picker';
import {globalStateType} from '../../ducks/reducers';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Styles from './styles';

type Props = {
  navigation: any;
};

const StartReport = ({navigation}: Props) => {
  const navigateTo = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <View style={Styles.screenContainer}>
      <Header navigation={navigation} screenTitle="Set Report" backOption />
      <View style={Styles.contentContainer}></View>
      <Footer />
    </View>
  );
};

const mapStateTopProps = (state: globalStateType) => {
  return {};
};

export default connect(mapStateTopProps, {})(StartReport);
