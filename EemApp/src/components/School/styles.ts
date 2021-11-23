import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px;
`;

export const Image = styled.Image`
  width: 72px;
  height: 72px;
`;

export const DescriptionGroup = styled.View`
  flex: 1;
  flex-direction: column;
  margin-left: 8px;
`;

export const Title = styled.Text`
  font-size: 24px;
`;

export const Context = styled.Text`
  font-size: 16px;
`;

export const ChevronText = styled.Text`
  margin-left: 8px;
  font-size: 32px;
`;
