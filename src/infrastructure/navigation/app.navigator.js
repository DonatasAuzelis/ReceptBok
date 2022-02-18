import React from 'react';

import {MockRecipesNavigator} from './mockRecipes.navigator';
import {SettingsNavigator} from './settings.navigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {CreateRecipeScreen} from '../../features/recipes/screens/create.screen';

import {MockRecipesContextProvider} from '../../services/mockRecipes/mockRecipes.context';
import {FavouritesContextProvider} from '../../services/favourites/favourites.context';
import {UserRecipesContextProvider} from '../../services/userRecipes/userRecipes.context';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Hem: 'menu-outline',
  Skapa: 'add-outline',
  Profil: 'person-outline',
};

const createScreenOptions = ({route}) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({size, color}) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarStyle: {
      backgroundColor: '#89B181',
    },
    headerShown: false,
  };
};

export const AppNavigator = () => {
  return (
    <UserRecipesContextProvider>
      <FavouritesContextProvider>
        <MockRecipesContextProvider>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: '#FEFAE0',
              inactiveTintColor: '#283618',
            }}>
            <Tab.Screen name="Hem" component={MockRecipesNavigator} />
            <Tab.Screen name="Skapa" component={CreateRecipeScreen} />
            <Tab.Screen name="Profil" component={SettingsNavigator} />
          </Tab.Navigator>
        </MockRecipesContextProvider>
      </FavouritesContextProvider>
    </UserRecipesContextProvider>
  );
};
