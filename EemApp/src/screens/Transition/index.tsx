import React, {useEffect, useState} from 'react';
import {useAsyncStorage} from '@react-native-community/async-storage';

import {ActivityIndicator, Container, Image} from './styles';

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

  const storageEscola = useAsyncStorage('@eem:escola');

  useEffect(() => {
    storageEscola.getItem().then(escola => {
      if (escola) {
        setEscola(JSON.parse(escola));
      }
    });
  }, []);

  return (
    <Container>
      {escola && <Image source={{uri: escola.urlLogoContexto}} />}
      <ActivityIndicator />
    </Container>
  );
}
