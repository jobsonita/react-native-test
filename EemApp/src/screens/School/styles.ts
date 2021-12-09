import styled, {css} from 'styled-components/native';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  flex: 1;
  background-color: white;
  margin-bottom: 8px;
`;

export const StatusBar = styled.StatusBar.attrs({
  barStyle: 'dark-content',
  backgroundColor: 'white',
})``;

export const ButtonGroup = styled.View`
  padding: 8px;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Button = styled.TouchableOpacity`
  position: relative;
  align-items: center;
`;

export const ButtonIcon = styled.Text<{active?: boolean}>`
  width: 48px;
  height: 48px;
  text-align: center;
  border-width: 1px;
  border-radius: 4px;
  border-color: #bbb;

  ${({active}) =>
    active &&
    css`
      border-color: #0d5d92;
    `}
`;

export const Icon = styled(MaterialCommunityIcon).attrs({
  size: 40,
})<{active?: boolean}>`
  color: #bbb;
  ${({active}) =>
    active &&
    css`
      color: #0d5d92;
    `}
`;

export const ButtonText = styled.Text`
  font-size: 12px;
`;

export const NotificationCounter = styled.View`
  z-index: 1;
  position: absolute;
  top: 4px;
  right: -8px;
  background-color: #ff3333;
  border-radius: 12px;
  padding: 3px;
  padding-top: 4px;
  padding-bottom: 2px;
  min-width: 18px;
`;

export const NotificationCounterText = styled.Text`
  font-size: 12px;
  line-height: 12px;
  text-align: center;
  color: white;
`;
