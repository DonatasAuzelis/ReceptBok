import React, {useContext} from 'react';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';

import {FavouritesContext} from '../../services/favourites/favourites.context';

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 20px;
`;

export const Favourite = ({mockRecipe}) => {
  const {favourites, addToFavourites, removeFromFavourites} =
    useContext(FavouritesContext);
  const isFavourite = favourites.find(r => r.id === mockRecipe.id);

  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite
          ? addToFavourites(mockRecipe)
          : removeFromFavourites(mockRecipe)
      }>
      <Ionicons
        name={isFavourite ? 'heart' : 'heart-outline'}
        size={24}
        color={isFavourite ? 'red' : 'black'}
      />
    </FavouriteButton>
  );
};
