import React, {useEffect, useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAsyncStorage} from '@react-native-community/async-storage';

import {S} from './styles';

import {RootStackParamList} from '../../Router';

import {School} from '../../components/School';

interface Conteudo {
  contexto: string;
  guid: string;
  id: number;
  nomeAplicacao: string;
  nomeCompleto: string;
  token: string;
  urlIconeContexto: string;
  urlLogoContexto: string;
}

export function HomeScreen() {
  const [conteudo, setConteudo] = useState<Conteudo[]>([]);

  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'Transition'>
    >();

  const asyncStorage = useAsyncStorage('@eem:conteudo');

  useEffect(() => {
    asyncStorage.getItem().then(cont => {
      if (cont) {
        setConteudo(JSON.parse(cont));
      }
    });
  }, []);

  function handlePress(conteudo: Conteudo) {
    navigation.navigate('Transition');
  }

  return (
    <S.View>
      <View>
        <Text>O</Text>
        <TextInput placeholder="Busca" />
      </View>
      <FlatList
        data={conteudo}
        keyExtractor={item => item.guid}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => handlePress(item)}>
            <School
              name={item.nomeAplicacao}
              contexto={item.contexto}
              urlIconeContexto={item.urlIconeContexto}
            />
          </TouchableOpacity>
        )}
      />
    </S.View>
  );
}
