import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

import {UserRecipesContext} from '../../../services/userRecipes/userRecipes.context';

import {SafeArea} from '../../../components/utility/safe-area.component';
import {Text} from '../../../components/typography/text.component';
import {Spacer} from '../../../components/spacer/spacer.component';

import {MockRecipeList} from '../../mockRecipes/components/mockRecipe-list.styles';
import {RecipeCard} from '../../recipes/components/recipeCard.component';

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;
export const UserRecipesScreen = ({navigation}) => {
  const {userRecipesForContext} = useContext(UserRecipesContext);

  return userRecipesForContext.length ? (
    <SafeArea>
      <MockRecipeList
        data={userRecipesForContext}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RecipeDetail', {
                  recipe: item,
                })
              }>
              <Spacer position="bottom" size="large">
                <RecipeCard recipe={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text center>Du har inte lagt till något recept än :)</Text>
    </NoFavouritesArea>
  );
};
