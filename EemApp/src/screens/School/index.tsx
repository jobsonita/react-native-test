import React, {useEffect, useState} from 'react';
import {BackHandler, FlatList} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAsyncStorage} from '@react-native-community/async-storage';
import DropShadow from 'react-native-drop-shadow';

import {RootStackParamList} from '../../Router';

import {Message} from '../../components/Message';

import {
  Button,
  ButtonGroup,
  ButtonText,
  Container,
  Icon,
  NotificationCounter,
  NotificationCounterText,
  StatusBar,
} from './styles';

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

  return (
    <Container>
      <StatusBar />
      <FlatList
        data={mensagens}
        keyExtractor={item => item.gudMensagem}
        CellRendererComponent={DropShadow}
        renderItem={({item}) => (
          <DropShadow
            style={{
              shadowColor: '#DDD',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0.5,
              shadowRadius: 2,
            }}>
            <Message message={item} />
          </DropShadow>
        )}
      />
      <ButtonGroup>
        <Button>
          <Icon name="newspaper-variant" active />
          <ButtonText>Notícias</ButtonText>
        </Button>
        <Button>
          <NotificationCounter>
            <NotificationCounterText>6</NotificationCounterText>
          </NotificationCounter>
          <Icon name="lead-pencil" />
          <ButtonText>Escrever</ButtonText>
        </Button>
        <Button>
          <NotificationCounter>
            <NotificationCounterText>6</NotificationCounterText>
          </NotificationCounter>
          <Icon name="view-grid-outline" />
          <ButtonText>Menu</ButtonText>
        </Button>
        <Button>
          <Icon name="car" />
          <ButtonText>Chegando</ButtonText>
        </Button>
        <Button>
          <NotificationCounter>
            <NotificationCounterText>99+</NotificationCounterText>
          </NotificationCounter>
          <Icon name="account-outline" />
          <ButtonText>Perfil</ButtonText>
        </Button>
      </ButtonGroup>
    </Container>
  );
}
