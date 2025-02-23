import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';

export const Container = styled(LinearGradient).attrs({
  colors: ['#2b999a', '#196ca3'],
})`
  height: 100%;
  width: 100%;
  background-color: #2b999a;
`;

export const StatusBar = styled.StatusBar.attrs({
  barStyle: 'light-content',
  backgroundColor: '#2b999a',
})``;

export const Content = styled.View`
  height: 100%;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  padding: 16px;
`;

export const TopBarGroup = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 16px;
  margin-top: 12px;
`;

export const BackIcon = styled(MaterialIcon).attrs({
  name: 'arrow-back-ios',
  color: 'white',
  size: 32,
})``;

export const HelpIcon = styled(FontAwesomeIcon).attrs({
  name: 'question-circle-o',
  color: 'white',
  size: 32,
})``;

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

export const UserIcon = styled(SimpleLineIcon).attrs({
  name: 'user',
  color: 'white',
  size: 24,
})`
  margin: 4px;
  margin-left: 8px;
`;

export const PasswordIcon = styled(IonIcon).attrs({
  name: 'key-outline',
  color: 'white',
  size: 24,
})`
  margin: 4px;
  margin-left: 8px;
`;

export const PhoneIcon = styled(MaterialIcon).attrs({
  name: 'phone-iphone',
  color: 'white',
  size: 28,
})`
  margin-top: 4px;
  margin-bottom: 4px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'white',
})`
  flex: 1;
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
  position: absolute;
  bottom: 0;
  margin: 8px 16px;
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
