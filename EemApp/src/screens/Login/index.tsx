import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {S} from './styles';

import {RootStackParamList} from '../../Router';

export function LoginScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();

  return (
    <S.View>
      <Text>Informe o usuário e a senha encaminhados pela escola</Text>
      <TextInput placeholder="Usuário" />
      <TextInput placeholder="Senha" />
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Entrar</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity>
          <Text>Esqueci a minha senha</Text>
        </TouchableOpacity>
        <View />
        <TouchableOpacity>
          <Text>Política de Privacidade</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text>Entrar com celular</Text>
      </TouchableOpacity>
    </S.View>
  );
}
