import React from 'react';
import {SettingsScreen} from '../../features/settings/screens/settings.screen';
import {FavouritesScreen} from '../../features/settings/screens/favourites.screen';
import {UserRecipesScreen} from '../../features/settings/screens/userRecipes.screen';
import {UserRecipeCardScreen} from '../../features/recipes/screens/userRecipeDetail.screen';
import {ProfileSettingsScreen} from '../../features/settings/screens/profileSettingsScreen.screen';
import {ChangePasswordScreen} from '../../features/settings/screens/changePassword.screen';

import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({route, navigation}) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      }}>
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Profil"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
      <SettingsStack.Screen name="UserRecipes" component={UserRecipesScreen} />
      <SettingsStack.Screen
        name="ProfileSettings"
        component={ProfileSettingsScreen}
      />
      <SettingsStack.Screen
        name="RecipeDetail"
        component={UserRecipeCardScreen}
      />
      <SettingsStack.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
      />
    </SettingsStack.Navigator>
  );
};
