import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import Styles from './styles';

type Props = {
  screenTitle?: string;
  navigation: any;
  backOption?: boolean;
  customNav?: () => void;
};
const backIcon = require('../../../assets/icons/back.png');

const Header = ({screenTitle, navigation, backOption, customNav}: Props) => {
  return (
    <View style={Styles.headerContainer}>
      <View style={Styles.backContainer}>
        <TouchableOpacity
          onPress={customNav ? customNav : () => navigation.goBack()}>
          {backOption && <Image source={backIcon} style={Styles.back} />}
        </TouchableOpacity>
      </View>
      <View style={Styles.logoContainer}>
        <Text style={Styles.headerTitle}>{screenTitle}</Text>
      </View>
    </View>
  );
};

export default Header;
