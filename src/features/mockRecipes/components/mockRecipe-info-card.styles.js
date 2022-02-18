import styled from 'styled-components/native';
import {Card} from 'react-native-paper';

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const Info = styled.View`
  padding: ${props => props.theme.space[3]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MockRecipeCard = styled(Card)`
  background-color: #fdf5c0;
  margin-bottom: ${props => props.theme.space[3]};
`;

export const MockRecipeCardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  background-color: #fdf5c0;
`;