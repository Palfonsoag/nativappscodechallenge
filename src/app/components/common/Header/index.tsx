import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import Styles from './styles';

type Props = {screenTitle?: string; navigation: any; customNav?: () => void};

const LOGO = require('../../../assets/icons/tribalyColor.png');
const backIcon = require('../../../assets/icons/back.png');

const Header = ({screenTitle, navigation, customNav}: Props) => {
  return (
    <View style={Styles.headerContainer}>
      <View style={Styles.backContainer}>
        <TouchableOpacity
          onPress={customNav ? customNav : () => navigation.goBack()}>
          <Image source={backIcon} style={Styles.back} />
        </TouchableOpacity>
      </View>
      <View style={Styles.logoContainer}>
        {screenTitle ? (
          <Text style={Styles.headerTitle}>{screenTitle}</Text>
        ) : (
          <Image source={LOGO} style={Styles.logo} />
        )}
      </View>
    </View>
  );
};

export default Header;
