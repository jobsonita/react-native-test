import React from 'react';
import {Alert, Keyboard, TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAsyncStorage} from '@react-native-community/async-storage';

import {
  BackIcon,
  ButtonText,
  Container,
  Content,
  HelpGroup,
  HelpIcon,
  HorizontalDivider,
  Input,
  InputGroup,
  InputRow,
  LoginButton,
  LoginButtonText,
  LoginDescriptionText,
  LoginWithPhone,
  LoginWithPhoneButton,
  LoginWithPhoneButtonText,
  PasswordIcon,
  PhoneIcon,
  PrivacyPolicyButton,
  SignUpButton,
  StatusBar,
  TopBarGroup,
  UserIcon,
  VerticalDivider,
} from './styles';

import {RootStackParamList} from '../../Router';

export function LoginScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [fetching, setFetching] = React.useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();

  const asyncStorage = useAsyncStorage('@eem:conteudo');

  async function handleLogin() {
    setFetching(true);
    const response = await fetch(
      'https://api.tst2.escolaapp.com/api/v1/Acesso/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login: username,
          senha: password,
          nomeApp: 'br.com.eem.teste',
          versaoApp: '10',
          versaoSO: '10',
          idDispositivo: 'teste-mobile',
        }),
      },
    );
    if (response.status === 200) {
      const {conteudo} = await response.json();
      await asyncStorage.setItem(JSON.stringify(conteudo));
      setFetching(false);
      navigation.navigate('Home');
    } else {
      Alert.alert('Erro', 'Usuário ou senha inválidos');
      setFetching(false);
    }
  }

  return (
    <Container>
      <StatusBar />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Content>
          <TopBarGroup>
            <BackIcon />
            <HelpIcon />
          </TopBarGroup>
          <LoginDescriptionText>
            Informe o usuário e a senha encaminhados pela escola
          </LoginDescriptionText>
          <InputGroup>
            <InputRow>
              <UserIcon />
              <Input
                placeholder="Usuário"
                value={username}
                onChangeText={text => setUsername(text)}
              />
            </InputRow>
            <HorizontalDivider />
            <InputRow>
              <PasswordIcon />
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
          <LoginWithPhone>
            <LoginWithPhoneButton disabled={fetching}>
              <PhoneIcon />
              <LoginWithPhoneButtonText>
                Entrar com o celular
              </LoginWithPhoneButtonText>
            </LoginWithPhoneButton>
          </LoginWithPhone>
        </Content>
      </TouchableWithoutFeedback>
    </Container>
  );
}
