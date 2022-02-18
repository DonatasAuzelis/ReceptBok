/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {ActivityIndicator, Colors} from 'react-native-paper';

import {TouchableOpacity} from 'react-native';
import {FadeInView} from '../../../components/animations/fade.animation';
import {SafeArea} from '../../../components/utility/safe-area.component';
import styled from 'styled-components/native';

import {MockRecipeInfoCard} from '../components/mockRecipe-info-card.component';
import {MockRecipesContext} from '../../../services/mockRecipes/mockRecipes.context';
import {FavouritesContext} from '../../../services/favourites/favourites.context';
import {MockRecipeList} from '../components/mockRecipe-list.styles';

import {Search} from '../components/search.component';

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const MockRecipeScreen = ({navigation}) => {
  const {mockRecipes, isLoading} = useContext(MockRecipesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      <MockRecipeList
        data={mockRecipes}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('MockRecipeDetail', {mockRecipe: item})
              }>
              <FadeInView>
                <MockRecipeInfoCard mockRecipe={item} />
              </FadeInView>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.name}
        contentContainerStyle={{padding: 16}}
      />
    </SafeArea>
  );
};
