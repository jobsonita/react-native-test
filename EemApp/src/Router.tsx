import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {HomeScreen} from './screens/Home';
import {LoginScreen} from './screens/Login';
import {TransitionScreen} from './screens/Transition';
import {SchoolScreen} from './screens/School';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Transition: undefined;
  School: {title: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Router() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Selecione a sessão principal',
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#0d5d92'},
          headerLeft: ({canGoBack}) =>
            canGoBack && (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrow-back-ios" size={32} color="white" />
              </TouchableOpacity>
            ),
        }}
      />
      <Stack.Screen
        name="Transition"
        component={TransitionScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="School"
        component={SchoolScreen}
        options={{
          title: 'School',
          headerTintColor: '#0d5d92',
          headerStyle: {backgroundColor: 'white'},
          headerBackVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
