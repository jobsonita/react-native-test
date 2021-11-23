import React from 'react';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {
  ButtonText,
  Container,
  Content,
  HelpGroup,
  HorizontalDivider,
  Image,
  Input,
  InputGroup,
  InputRow,
  LoginButton,
  LoginButtonText,
  LoginDescriptionText,
  LoginWithPhone,
  LoginWithPhoneButton,
  LoginWithPhoneButtonText,
  PrivacyPolicyButton,
  SignUpButton,
  StatusBar,
  VerticalDivider,
} from './styles';

import {RootStackParamList} from '../../Router';

export function LoginScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();

  return (
    <Container>
      <StatusBar />
      <Content>
        <LoginDescriptionText>
          Informe o usuário e a senha encaminhados pela escola
        </LoginDescriptionText>
        <InputGroup>
          <InputRow>
            <Image>
              <Text>O</Text>
            </Image>
            <Input placeholder="Usuário" />
          </InputRow>
          <HorizontalDivider />
          <InputRow>
            <Image>
              <Text>O</Text>
            </Image>
            <Input placeholder="Senha" secureTextEntry={true} />
          </InputRow>
        </InputGroup>
        <LoginButton onPress={() => navigation.navigate('Home')}>
          <LoginButtonText>Entrar</LoginButtonText>
        </LoginButton>
        <HelpGroup>
          <SignUpButton>
            <ButtonText>Esqueci a minha senha</ButtonText>
          </SignUpButton>
          <VerticalDivider />
          <PrivacyPolicyButton>
            <ButtonText>Política de Privacidade</ButtonText>
          </PrivacyPolicyButton>
        </HelpGroup>
      </Content>
      <LoginWithPhone>
        <LoginWithPhoneButton>
          <Image>
            <Text>O</Text>
          </Image>
          <LoginWithPhoneButtonText>
            Entrar com o celular
          </LoginWithPhoneButtonText>
        </LoginWithPhoneButton>
      </LoginWithPhone>
    </Container>
  );
}
