import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Styles from './styles';

type Props = {
  selectedIndexTab: number;
  onTabPress: (tab: number) => void;
};

const ICONS = {
  connection: require('../../../assets/icons/conectionsGray.png'),
  connectionSelected: require('../../../assets/icons/conectionsRed.png'),
  request: require('../../../assets/icons/requestGray.png'),
  requestSelected: require('../../../assets/icons/requestRed.png'),
  profiles: require('../../../assets/icons/profilesGray.png'),
  profilesSelected: require('../../../assets/icons/profilesRed.png'),
};

const Footer = ({selectedIndexTab, onTabPress}: Props) => {
  return (
    <View style={Styles.footerContainer}>
      <TouchableOpacity
        style={Styles.tab}
        onPress={() => {
          onTabPress(0);
        }}
        disabled={selectedIndexTab === 0 ? true : false}>
        <Image
          style={Styles.footerIcons}
          source={
            selectedIndexTab === 0 ? ICONS.connectionSelected : ICONS.connection
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.tab}
        onPress={() => {
          onTabPress(1);
        }}
        disabled={selectedIndexTab === 1 ? true : false}>
        <Image
          style={Styles.footerIcons}
          source={
            selectedIndexTab === 1 ? ICONS.requestSelected : ICONS.request
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.tab}
        onPress={() => {
          onTabPress(2);
        }}
        disabled={selectedIndexTab === 2 ? true : false}>
        <Image
          style={{resizeMode: 'contain', height: 38, width: 38}}
          source={
            selectedIndexTab === 2 ? ICONS.profilesSelected : ICONS.profiles
          }
        />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
