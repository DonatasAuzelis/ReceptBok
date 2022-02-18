import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

import {FavouritesContext} from '../../../services/favourites/favourites.context';

import {SafeArea} from '../../../components/utility/safe-area.component';
import {Text} from '../../../components/typography/text.component';
import {Spacer} from '../../../components/spacer/spacer.component';

import {MockRecipeList} from '../../mockRecipes/components/mockRecipe-list.styles';
import {MockRecipeInfoCard} from '../../mockRecipes/components/mockRecipe-info-card.component';

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;
export const FavouritesScreen = ({navigation}) => {
  const {favourites} = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <MockRecipeList
        data={favourites}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('MockRecipeDetail', {
                  mockRecipe: item,
                })
              }>
              <Spacer position="bottom" size="large">
                <MockRecipeInfoCard mockRecipe={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text center>Du har inte lagt till några favoritet än</Text>
    </NoFavouritesArea>
  );
};
