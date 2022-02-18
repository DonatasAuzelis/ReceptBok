import React from 'react';
import {Text} from '../../../components/typography/text.component';
import {View} from 'react-native';
import {RemoveRecipe} from '../../../components/userRecipe/removeRecipe.component';

import {
  Info,
  MockRecipeCard,
  MockRecipeCardCover,
} from '../../mockRecipes/components/mockRecipe-info-card.styles';

export const RecipeCard = ({recipe = {}}) => {
  const {
    name = 'Some Recipe',
    image = 'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
  } = recipe;

  return (
    <MockRecipeCard elevation={5}>
      <View>
        <MockRecipeCardCover key={name} source={{uri: image}} />
      </View>
      <Info>
        <Text>{name}</Text>
        <RemoveRecipe recipe={recipe} />
      </Info>
    </MockRecipeCard>
  );
};
