import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import AuthRoutes from './auth.routes';

const Routes: React.FC = () => (
  <NavigationContainer>
    <AuthRoutes />
  </NavigationContainer>
);

export default Routes;
