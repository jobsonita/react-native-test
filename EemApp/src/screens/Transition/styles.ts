import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const Image = styled.Image`
  width: 320px;
  height: 320px;
`;

export const ActivityIndicator = styled.ActivityIndicator.attrs({
  size: 'large',
})``;

export const StatusBar = styled.StatusBar.attrs({
  barStyle: 'light-content',
  backgroundColor: 'white',
})``;
