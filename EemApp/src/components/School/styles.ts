import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px;
  margin-top: 8px;
`;

export const Image = styled.Image`
  width: 64px;
  height: 64px;
  margin-bottom: 8px;
`;

export const VerticalWrapper = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const HorizontalWrapper = styled.View`
  flex: 1;
  flex-direction: row;
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

export const ArrowIcon = styled(Icon).attrs({
  name: 'arrow-forward-ios',
  size: 24,
  color: '#999',
})`
  margin-top: 16px;
  margin-left: 8px;
`;

export const HorizontalLine = styled.View`
  width: auto;
  height: 1px;
  background-color: #e8e8e8;
`;
