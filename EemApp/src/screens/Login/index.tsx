import React from 'react';
import {Alert, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {api} from '../../services/api';

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
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [fetching, setFetching] = React.useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();

  async function handleLogin() {
    setFetching(true);
    const response = await api.post('/Acesso/login', {
      login: username,
      senha: password,
      nomeApp: 'br.com.eem.teste',
      versaoApp: '10',
      versaoSO: '10',
      idDispositivo: 'teste-mobile',
    });
    console.log(response.status);
    console.log(response.data);
    if (response.status === 200 && response.data.conteudo.length > 0) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Erro', 'Usuário ou senha inválidos');
      setFetching(false);
    }
  }

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
            <Input
              placeholder="Usuário"
              value={username}
              onChangeText={text => setUsername(text)}
            />
          </InputRow>
          <HorizontalDivider />
          <InputRow>
            <Image>
              <Text>O</Text>
            </Image>
            <Input
              placeholder="Senha"
              secureTextEntry={true}
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </InputRow>
        </InputGroup>
        <LoginButton onPress={handleLogin} disabled={fetching}>
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
        <LoginWithPhoneButton disabled={fetching}>
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
