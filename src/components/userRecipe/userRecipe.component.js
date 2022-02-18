import React, {useContext} from 'react';
import {UserRecipesContext} from '../../services/userRecipes/userRecipes.context';

import {Button} from 'react-native-paper';

export const UserRecipeButton = ({recipe}) => {
  const {addToUserRecipes} = useContext(UserRecipesContext);
  return (
    <>
      <Button
        onPress={() => {
          addToUserRecipes(recipe);
        }}>
        Lägg till receptet
      </Button>
    </>
  );
};
