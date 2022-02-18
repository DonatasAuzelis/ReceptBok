import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {MockRecipesScreen} from '../../features/mockRecipes/screens/mockRecipes.screen';

const MockRecipeStack = createStackNavigator();

export const MockRecipesNavigator = () => {
  return (
    <MockRecipeStack.Navigator headerMode="none">
      <MockRecipeStack.Screen name="Recipes" component={MockRecipesScreen} />
    </MockRecipeStack.Navigator>
  );
};
