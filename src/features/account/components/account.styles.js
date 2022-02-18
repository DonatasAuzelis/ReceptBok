import styled from 'styled-components/native';

import {Button, TextInput} from 'react-native-paper';
import {Text} from '../../../components/typography/text.component';

export const AccountBackground = styled.ImageBackground.attrs({
  source: require('../../../../assets/backgroundImage.jpg'),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  align-items: center;
  padding: ${props => props.theme.space[4]};
  margin-top: ${props => props.theme.space[2]};
  width: 100%;
`;

export const CreateRecipeContainer = styled.View`
  padding: ${props => props.theme.space[4]};
  margin-top: ${props => props.theme.space[2]};
  width: 100%;
`;

export const CreateRecipeButton = styled(Button).attrs({
  color: '#E9C46A',
  width: '100%',
})`
  padding: ${props => props.theme.space[3]};
  border-radius: 20px;
`;

export const AuthButton = styled(Button).attrs({
  color: '#E9C46A',
  width: '90%',
})`
  padding: ${props => props.theme.space[3]};
  border-radius: 20px;
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const Title = styled(Text)`
  font-weight: bold;
  font-size: 30px;
`;
export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${props => props.theme.space[2]};
  margin-bottom: ${props => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${props => props.theme.space[2]};
`;
