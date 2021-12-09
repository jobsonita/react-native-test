import React from 'react';

import {
  ArrowIcon,
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
          <ArrowIcon />
        </HorizontalWrapper>
        <HorizontalLine />
      </VerticalWrapper>
    </Container>
  );
}
