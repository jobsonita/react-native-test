import React from 'react';
import {format} from 'date-fns';

import {
  Container,
  ContentGroup,
  Data,
  Icon,
  Image,
  TextGroup,
  Title,
  Sender,
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

interface MessageProps {
  message: Message;
}

export function Message({message}: MessageProps) {
  return (
    <Container>
      <ContentGroup>
        <Icon
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Circle-icons-megaphone.svg/1200px-Circle-icons-megaphone.svg.png',
          }}
        />
        <TextGroup>
          <Title>{message.sumario}</Title>
          <Sender>Por: {message.remetente}</Sender>
        </TextGroup>
        <Data>{format(new Date(message.data), 'dd/MM HH:mm')}</Data>
      </ContentGroup>
      {message.imagemUrl && <Image source={{uri: message.imagemUrl}} />}
    </Container>
  );
}
