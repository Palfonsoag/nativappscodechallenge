import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import Styles from './styles';

type Props = {
  label: string;
  short?: boolean;
  cancel?: boolean;
  filter?: boolean;
  disabled?: boolean;
  height?: number;
  width?: number;
  onPress?: () => void;
};

const FilledButton = ({
  label,
  short,
  disabled,
  cancel,
  filter,
  height,
  width,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        Styles.button,
        short ? Styles.short : Styles.large,
        cancel ? Styles.cancel : Styles.approve,
        disabled ? Styles.disabled : {},
        filter ? Styles.filter : {},
        height && {height},
        width && {width},
      ]}
      onPress={onPress}>
      <View style={[filter && {width: '65%'}]}>
        <Text style={[Styles.text, filter ? Styles.filterText : {}]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FilledButton;
