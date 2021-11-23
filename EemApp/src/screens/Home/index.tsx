import React, {useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAsyncStorage} from '@react-native-community/async-storage';

import {S} from './styles';

import {RootStackParamList} from '../../Router';

export function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Login'>>();

  const asyncStorage = useAsyncStorage('@eem:token');

  useEffect(() => {
    asyncStorage.getItem().then(token => {
      console.log(token);
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
