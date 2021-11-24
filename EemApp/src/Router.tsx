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
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Selecione a sessão principal',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: '#0d5d92'},
          }}
        />
        <Stack.Screen
          name="Transition"
          component={TransitionScreen}
          options={{
            statusBarHidden: true,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
