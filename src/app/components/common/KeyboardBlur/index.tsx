import React, {ReactNode} from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';

type Props = {
  children: ReactNode;
};

export default ({children}: Props) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
