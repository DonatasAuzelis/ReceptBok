/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {List, Text} from 'react-native-paper';
import {ScrollView, View, ImageBackground} from 'react-native';
import {SafeArea} from '../../../components/utility/safe-area.component';
import styled from 'styled-components/native';

export const MockRecipeDetailsScreen = ({route}) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const {mockRecipe} = route.params;

  const ListAccordion = styled(List.Accordion).attrs({
    titleStyle: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 25,
    },
  })`
    background-color: #bc6c25;
    border-radius: 10px;
    border-width: 1px;
    height: 60px;
    justify-content: center;
    margin: 3px 0px 3px 0px;
  `;

  const ListItem = styled(List.Item).attrs({
    titleStyle: {
      fontStyle: 'italic',
      fontWeight: '500',
    },
  })`
    background-color: #dda15e;
    border-radius: 10px;
    border-width: 1px;
    height: 50px;
    justify-content: center;
    font-size: 200px;
    margin: 3px;
  `;

  const RenderIngredients = () => {
    return mockRecipe.ingredients.map(r => {
      return (
        <ListItem title={`${mockRecipe.ingredients.indexOf(r) + 1}. ` + r} />
      );
    });
  };

  const RenderCookingSteps = () => {
    return mockRecipe.cookingSteps.map(r => {
      return (
        <ListItem title={`${mockRecipe.cookingSteps.indexOf(r) + 1}. ` + r} />
      );
    });
  };

  return (
    <SafeArea>
      <ScrollView>
        <View style={{alignItems: 'center', padding: 20}}>
          <ImageBackground
            source={{uri: mockRecipe.image[0]}}
            style={{height: 400, width: 300}}
            imageStyle={{
              borderRadius: 15,
              borderColor: 'black',
              borderWidth: 1,
            }}
          />
        </View>
        <View style={{alignItems: 'center', paddingTop: 20}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 25,
            }}>
            {mockRecipe.name}
          </Text>
          <Text
            style={{
              fontStyle: 'italic',
              fontSize: 20,
              padding: 20,
            }}>
            {mockRecipe.description}
          </Text>
        </View>
        <View style={{padding: 20}}>
          <ListAccordion
            title="Ingredienser"
            theme={{color: 'red'}}
            left={props => <List.Icon {...props} />}
            expanded={breakfastExpanded}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)}>
            <RenderIngredients />
          </ListAccordion>
          <ListAccordion
            title="Tillagning"
            left={props => <List.Icon {...props} />}
            expanded={drinksExpanded}
            onPress={() => setDrinksExpanded(!drinksExpanded)}>
            <RenderCookingSteps />
          </ListAccordion>
        </View>
      </ScrollView>
    </SafeArea>
  );
};
