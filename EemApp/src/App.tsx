import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Router} from './Router';

export function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
