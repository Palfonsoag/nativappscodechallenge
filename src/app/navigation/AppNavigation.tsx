import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from '../theme/Colors';

const safeAreaViewStyle = {
  backgroundColor: Colors.black,
  flex: 1,
};

const AppStack = () => {
  return (
    <NavigationContainer>
      <View>
        <Text>Hello</Text>
      </View>
    </NavigationContainer>
  );
};

const AppStackContainer = () => (
  <SafeAreaView style={safeAreaViewStyle}>
    <AppStack />
  </SafeAreaView>
);

export default AppStackContainer;
