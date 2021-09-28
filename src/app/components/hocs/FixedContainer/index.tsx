import React from 'react';
import {View, StatusBar} from 'react-native';
import KeyboardBlur from '../../common/KeyboardBlur';
import {Colors} from '../../../theme/Colors';
import Styles from './styles';

type Props = {
  children: any;
  backgroundColor?: string;
};

const FixedContainer = ({children, backgroundColor = 'white'}: Props) => {
  return (
    <KeyboardBlur>
      <View style={{...Styles.contentView, backgroundColor: backgroundColor}}>
        <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
        <View style={Styles.upperView}>{children}</View>
      </View>
    </KeyboardBlur>
  );
};

export default FixedContainer;
