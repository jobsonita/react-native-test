import React, {useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAsyncStorage} from '@react-native-community/async-storage';

import {S} from './styles';

import {RootStackParamList} from '../../Router';
import {api} from '../../services/api';

export function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Login'>>();

  const asyncStorage = useAsyncStorage('@eem:contexto');

  useEffect(() => {
    asyncStorage.getItem().then(contexto => {
      if (contexto) {
        console.log(contexto);
        console.log(api.defaults.headers);
        api
          .post(`https://${contexto}/api/mensagem/ultimas-noticias/v3`, {})
          .then(response => {
            console.log(response);
          });
      }
    });
  }, [asyncStorage]);

  return (
    <S.View>
      <Text>Clique para acessar</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </S.View>
  );
}
