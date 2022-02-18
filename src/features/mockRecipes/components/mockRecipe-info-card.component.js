import React from 'react';
import {Favourite} from '../../../components/favourites/favourite.component';
import {Text} from '../../../components/typography/text.component';
import {View} from 'react-native';

import {
  Info,
  MockRecipeCard,
  MockRecipeCardCover,
} from './mockRecipe-info-card.styles';

export const MockRecipeInfoCard = ({mockRecipe = {}}) => {
  const {
    id = 0,
    name = 'Some Recipe',
    image = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
  } = mockRecipe;

  return (
    <MockRecipeCard>
      <View>
        <MockRecipeCardCover key={id} source={{uri: image[0]}} />
      </View>
      <Info>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 5,
          }}>
          {name}
        </Text>
        <Favourite mockRecipe={mockRecipe} />
      </Info>
    </MockRecipeCard>
  );
};
