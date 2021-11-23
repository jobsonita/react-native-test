import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from './screens/Home';
import {LoginScreen} from './screens/Login';
import {TransitionScreen} from './screens/Transition';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Transition: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: '<',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: '#2b999a'},
          }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Transition" component={TransitionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
