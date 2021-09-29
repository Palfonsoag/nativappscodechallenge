import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import StartReportScreen from '../screens/StartReport';
import ViewReportScreen from '../screens/ViewReport';
import {Colors} from '../theme/Colors';

const Stack = createNativeStackNavigator();

const safeAreaViewStyle = {
  backgroundColor: Colors.black,
  flex: 1,
};

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const forFade = ({current}: any) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const navigationOptions = {
  headerShown: false,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: forFade,
  transitionSpec: {
    open: config,
    close: config,
  },
};

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={navigationOptions}
        />
        <Stack.Screen
          name="StartReport"
          component={StartReportScreen}
          options={navigationOptions}
        />
        <Stack.Screen
          name="ViewReport"
          component={ViewReportScreen}
          options={navigationOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AppStackContainer = () => (
  <SafeAreaView style={safeAreaViewStyle}>
    <AppStack />
  </SafeAreaView>
);

export default AppStackContainer;
