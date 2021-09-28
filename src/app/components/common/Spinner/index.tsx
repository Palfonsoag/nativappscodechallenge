import React, {ReactElement} from 'react';
import {View, ActivityIndicator, Text, ViewStyle} from 'react-native';
import Styles from './styles';
import {Colors} from '../../../theme/Colors';

type Props = {
  size?: number;
  spinnerContainerStyle?: ViewStyle;
  loadingText?: string;
};

const Spinner = ({
  size,
  spinnerContainerStyle,
  loadingText,
}: Props): ReactElement => {
  return (
    <View style={[Styles.spinnerContainerStyle, spinnerContainerStyle]}>
      <ActivityIndicator size={size ? size : 45} color={Colors.green1} />
      {loadingText && (
        <Text style={Styles.spinnerTextStyle}>{loadingText}</Text>
      )}
    </View>
  );
};

export default Spinner;
