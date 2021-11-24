import React from 'react';

import {
  ChevronText,
  Container,
  Context,
  DescriptionGroup,
  HorizontalLine,
  HorizontalWrapper,
  Image,
  Title,
  VerticalWrapper,
} from './styles';

interface SchoolProps {
  name: string;
  contexto: string;
  urlIconeContexto: string;
}

export function School({name, contexto, urlIconeContexto}: SchoolProps) {
  return (
    <Container>
      <Image source={{uri: urlIconeContexto}} />
      <VerticalWrapper>
        <HorizontalWrapper>
          <DescriptionGroup>
            <Title>{name}</Title>
            <Context>{contexto}</Context>
          </DescriptionGroup>
          <ChevronText>&rsaquo;</ChevronText>
        </HorizontalWrapper>
        <HorizontalLine />
      </VerticalWrapper>
    </Container>
  );
}
