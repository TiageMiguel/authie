import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import React from 'react';

import GetStartedPage from '~/pages/getstarted';
import SigninPage from '~/pages/signin';
import SignupPage from '~/pages/signup';
import { RoutesName } from '~/types';

const Stack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Stack.Navigator
    initialRouteName={RoutesName.GETSTARTED}
    headerMode='none'
    screenOptions={{
      gestureEnabled: false,
      cardStyleInterpolator:
        TransitionPresets.SlideFromRightIOS.cardStyleInterpolator,
      transitionSpec: TransitionPresets.SlideFromRightIOS.transitionSpec,
    }}
  >
    <Stack.Screen name={RoutesName.GETSTARTED} component={GetStartedPage} />
    <Stack.Screen name={RoutesName.SIGNIN} component={SigninPage} />
    <Stack.Screen name={RoutesName.SIGNUP} component={SignupPage} />
  </Stack.Navigator>
);

export default AuthRoutes;
