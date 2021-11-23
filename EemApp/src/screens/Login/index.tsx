import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {S} from './styles';

import {RootStackParamList} from '../../Router';

export function LoginScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();

  return (
    <S.View>
      <Text>Clique para acessar</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Acessar</Text>
      </TouchableOpacity>
    </S.View>
  );
}
