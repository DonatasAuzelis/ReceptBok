import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {MockRecipeScreen} from '../../features/mockRecipes/screens/mockRecipes.screen';
import {MockRecipeDetailsScreen} from '../../features/mockRecipes/screens/mockRecipe-details.screen';

const MockRecipeStack = createStackNavigator();

export const MockRecipesNavigator = () => {
  return (
    <MockRecipeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MockRecipeStack.Screen name="Hem" component={MockRecipeScreen} />
      <MockRecipeStack.Screen
        name="MockRecipeDetail"
        component={MockRecipeDetailsScreen}
      />
    </MockRecipeStack.Navigator>
  );
};
