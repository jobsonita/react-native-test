import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const StatusBar = styled.StatusBar.attrs({
  barStyle: 'light-content',
  backgroundColor: '#0d5d92',
})``;

export const SearchBarContainer = styled.View`
  background-color: #ccc;
  padding: 8px;
`;

export const SearchBar = styled.View`
  flex-direction: row;
  align-items: center;

  background-color: white;
  border-radius: 12px;
  padding-right: 8px;
  padding-left: 8px;
`;

export const SearchBarIcon = styled.View`
  width: 24px;
  height: 24px;
  margin: 8px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  background-color: white;
  font-size: 20px;
  padding: 0;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  padding-right: 8px;
`;
