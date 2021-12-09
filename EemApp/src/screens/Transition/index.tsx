import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAsyncStorage} from '@react-native-community/async-storage';

import {ActivityIndicator, Container, Image, StatusBar} from './styles';

import {RootStackParamList} from '../../Router';

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

export function TransitionScreen() {
  const [escola, setEscola] = useState<Conteudo | null>(null);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'School'>>();

  const storageEscola = useAsyncStorage('@eem:escola');
  const storageEscolaDetalhes = useAsyncStorage('@eem:escola_detalhes');

  useEffect(() => {
    storageEscola.getItem().then(esc => {
      if (esc) {
        setEscola(JSON.parse(esc));
      }
    });
  }, []);

  useEffect(() => {
    if (escola) {
      fetch(`https://${escola.contexto}/api/mensagem/ultimas-noticias/v3`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Authorization': escola.token,
        },
        body: JSON.stringify({}),
      }).then(response => {
        response.json().then(data => {
          storageEscolaDetalhes.setItem(JSON.stringify(data));
          navigation.navigate('School', {title: escola.nomeAplicacao});
        });
      });
    }
  }, [escola]);

  return (
    <Container>
      <StatusBar />
      {escola && <Image source={{uri: escola.urlLogoContexto}} />}
      <ActivityIndicator />
    </Container>
  );
}
