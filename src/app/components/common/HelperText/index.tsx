import React from 'react';
import {View, Text} from 'react-native';
import Styles from './styles';

type Props = {error?: boolean; errorMessage: string};

const HelperText = ({error, errorMessage}: Props) => {
  return (
    <View style={[error ? Styles.helperTextContainer : {display: 'none'}]}>
      <Text style={Styles.errorText}>{errorMessage}</Text>
    </View>
  );
};

export default HelperText;
