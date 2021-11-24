import React, {useEffect, useState} from 'react';
import {FlatList, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAsyncStorage} from '@react-native-community/async-storage';

import {RootStackParamList} from '../../Router';

import {School} from '../../components/School';

import {
  Button,
  Container,
  SearchBar,
  SearchBarContainer,
  SearchBarIcon,
  SearchInput,
  StatusBar,
} from './styles';

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

  const storageConteudo = useAsyncStorage('@eem:conteudo');
  const storageEscola = useAsyncStorage('@eem:escola');

  useEffect(() => {
    storageConteudo.getItem().then(cont => {
      if (cont) {
        setConteudo(JSON.parse(cont));
      }
    });
  }, []);

  function handlePress(escola: Conteudo) {
    storageEscola.setItem(JSON.stringify(escola));
    navigation.navigate('Transition');
  }

  return (
    <Container>
      <StatusBar />
      <SearchBarContainer>
        <SearchBar>
          <SearchBarIcon>
            <Text>O</Text>
          </SearchBarIcon>
          <SearchInput placeholder="Busca" />
        </SearchBar>
      </SearchBarContainer>
      <FlatList
        data={conteudo}
        keyExtractor={item => item.guid}
        renderItem={({item}) => (
          <Button onPress={() => handlePress(item)}>
            <School
              name={item.nomeAplicacao}
              contexto={item.contexto}
              urlIconeContexto={item.urlIconeContexto}
            />
          </Button>
        )}
      />
    </Container>
  );
}
