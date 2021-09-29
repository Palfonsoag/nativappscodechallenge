import React from 'react';
import {
  View,
  TextInput,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import Styles from './styles';

type Props = {
  inputIcon?: any;
  actionIcon?: any;
  onPressActionIcon?: () => void;
  value: string;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: any;
  textInputStyle?: ViewStyle & TextStyle;
  inputContainerStyle?: ViewStyle & TextStyle;
  editable?: boolean;
  onChangeText?: (text: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  maxLength?: number;
  multiline?: boolean;
  numberOfLines?: number;
  autoCapitalize?: any;
  placeholderTextColor?: string;
  search?: boolean;
  message?: boolean;
};

const Input = ({
  inputIcon,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  textInputStyle,
  editable,
  onBlur,
  onFocus,
  maxLength,
  multiline,
  numberOfLines,
  autoCapitalize,
  inputContainerStyle,
  placeholderTextColor,
  actionIcon,
  onPressActionIcon,
  search,
  message,
}: Props) => {
  return (
    <View
      style={[
        inputContainerStyle ? inputContainerStyle : Styles.inputContainerStyle,
        {height: multiline && numberOfLines ? 60 * numberOfLines : 60},
        search && {marginTop: 0, width: '100%', height: 45},
        message && {marginTop: 0, width: '80%'},
      ]}>
      <View style={Styles.textSection}>
        {inputIcon}
        <TextInput
          secureTextEntry={secureTextEntry}
          editable={editable}
          placeholder={placeholder}
          autoCorrect={false}
          value={value}
          keyboardType={keyboardType ? keyboardType : 'default'}
          onChangeText={onChangeText}
          onBlur={onBlur}
          onFocus={onFocus}
          style={[
            Styles.inputStyle,
            textInputStyle,
            {height: multiline && numberOfLines ? 45 * numberOfLines : 45},
          ]}
          maxLength={maxLength}
          multiline={multiline}
          numberOfLines={numberOfLines}
          autoCapitalize={autoCapitalize}
          placeholderTextColor={placeholderTextColor}
        />
      </View>
      <TouchableOpacity
        style={Styles.actionSection}
        onPress={onPressActionIcon}>
        {actionIcon}
      </TouchableOpacity>
    </View>
  );
};

export default Input;
