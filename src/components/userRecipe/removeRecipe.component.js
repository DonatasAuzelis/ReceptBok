import React, {useContext} from 'react';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';

import {UserRecipesContext} from '../../services/userRecipes/userRecipes.context';

const RemoveButton = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 20px;
`;

export const RemoveRecipe = ({recipe}) => {
  const {removeFromUserRecipes} = useContext(UserRecipesContext);
  return (
    <RemoveButton onPress={() => removeFromUserRecipes(recipe)}>
      <Ionicons name={'trash-outline'} size={24} color={'black'} />
    </RemoveButton>
  );
};
