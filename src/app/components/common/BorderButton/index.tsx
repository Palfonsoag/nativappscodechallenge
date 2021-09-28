import React from 'react';
import {TouchableOpacity, Text, Image, View, ImageProps} from 'react-native';
import Styles from './styles';
import {Colors} from '../../../theme/Colors';

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
  disabled?: boolean;
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
  disabled,
}: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        Styles.button,
        disabled && {borderColor: Colors.greenDisabled},
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
            disabled && {color: Colors.greenDisabled},
            {color: labelColor, fontWeight: weight},
          ]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BorderButton;
