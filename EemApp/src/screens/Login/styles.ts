import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#2b999a', '#196ca3'],
})`
  flex: 1;
  background-color: #2b999a;
  padding: 16px;
`;

export const StatusBar = styled.StatusBar.attrs({
  barStyle: 'light-content',
  backgroundColor: '#2b999a',
})``;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: flex-start;
  padding-top: 100px;
`;

export const LoginDescriptionText = styled.Text`
  font-size: 20px;
  color: white;
`;

export const InputGroup = styled.View`
  width: 100%;
  border: 1px solid white;
  border-radius: 4px;
  margin-top: 24px;
`;

export const InputRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.View`
  width: 20px;
  height: 20px;
  margin: 8px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'white',
})`
  font-size: 20px;
  color: white;
`;

export const HorizontalDivider = styled.View`
  width: 100%;
  height: 1px;
  background-color: white;
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: white;
  border-radius: 4px;
  align-items: center;
  margin-top: 24px;
  width: 100%;
`;

export const LoginButtonText = styled.Text`
  color: #2b999a;
  font-size: 20px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const HelpGroup = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  padding-left: 8px;
  padding-right: 8px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 14px;
`;

export const SignUpButton = styled.TouchableOpacity``;

export const PrivacyPolicyButton = styled.TouchableOpacity``;

export const VerticalDivider = styled.View`
  width: 1px;
  height: 100%;
  background-color: white;
`;

export const LoginWithPhone = styled.View`
  width: 100%;
  border: 1px solid white;
  border-radius: 4px;
`;

export const LoginWithPhoneButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const LoginWithPhoneButtonText = styled.Text`
  font-size: 18px;
  color: white;
  margin-left: 60px;
`;
