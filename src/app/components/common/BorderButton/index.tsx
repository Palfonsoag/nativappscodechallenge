import React from 'react';
import {TouchableOpacity, Text, Image, View, ImageProps} from 'react-native';
import {Colors} from '../../../theme/Colors';
import Styles from './styles';

type Props = {
  label: string;
  onPress?: () => void;
  borderColor?: string;
  labelColor?: string;
  weight?: any;
  large?: boolean;
  short?: boolean;
  height?: number;
  icon?: ImageProps;
};

const BorderButton = ({
  label,
  onPress,
  borderColor = Colors.black,
  labelColor = Colors.black,
  weight = '700',
  large,
  short,
  height = 50,
  icon,
}: Props) => {
  return (
    <TouchableOpacity
      style={[
        Styles.button,
        {borderColor},
        large && Styles.large,
        short && Styles.short,
        {height},
      ]}
      onPress={onPress}>
      {icon && <Image source={icon} style={Styles.iconStyle} />}
      <View style={{width: '65%'}}>
        <Text
          style={[
            Styles.text,
            short && {fontSize: 10, lineHeight: 13},
            {color: labelColor, fontWeight: weight},
          ]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BorderButton;
