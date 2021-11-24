import React, {useEffect, useState} from 'react';
import {BackHandler, FlatList} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAsyncStorage} from '@react-native-community/async-storage';

import {RootStackParamList} from '../../Router';

import {Message} from '../../components/Message';

import {Container, StatusBar} from './styles';

interface Message {
  idMensagem: number;
  gudMensagem: string;
  corpoMensagem: string;
  sumario: string;
  remetente: string;
  data: string;
  imagemUrl?: string;
}

export function SchoolScreen() {
  const [mensagens, setMensagens] = useState<Message[]>([]);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();
  const route = useRoute();

  const storageEscolaMensagens = useAsyncStorage('@eem:escola_detalhes');

  useEffect(() => {
    navigation.setOptions({
      title: route.params?.title,
    });
  }, []);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        navigation.navigate('Home');
        return true;
      },
    );

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    storageEscolaMensagens.getItem().then(det => {
      if (det) {
        setMensagens(JSON.parse(det).feed);
      }
    });
  }, []);

  useEffect(() => {
    if (mensagens.length > 0) {
      console.log(mensagens[0]);
    }
  }, [mensagens]);

  return (
    <Container>
      <StatusBar />
      <FlatList
        data={mensagens}
        keyExtractor={item => item.gudMensagem}
        renderItem={({item}) => <Message message={item} />}
      />
    </Container>
  );
}
