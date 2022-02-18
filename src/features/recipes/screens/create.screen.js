import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components/native';
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Alert,
} from 'react-native';

import {SafeArea} from '../../../components/utility/safe-area.component';

import {
  CreateRecipeContainer,
  CreateRecipeButton,
} from '../../account/components/account.styles';

import {Spacer} from '../../../components/spacer/spacer.component';

import {TextInput} from 'react-native-paper';

import ImagePicker from 'react-native-image-crop-picker';

import {UserRecipeButton} from '../../../components/userRecipe/userRecipe.component';
import {UserRecipesContext} from '../../../services/userRecipes/userRecipes.context';

export const CreateRecipeScreen = ({recipe = {}}) => {
  const {userRecipesForContext, addToUserRecipes} =
    useContext(UserRecipesContext);
  const {
    name = 'My Recipe',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    ingredients = [],
    cookingSteps = [],
    recipeId,
  } = recipe;

  const [foodImage, setFoodImage] = useState(
    'https://i.pinimg.com/736x/d8/2c/a1/d82ca12786500210f3df344e2222d50e.jpg',
  );
  const [inputIngredients, setInputIngredients] = useState('');
  const [inputCookingSteps, setInputCookingSteps] = useState('');
  const [ingredientsArray, setIngredientsArray] = useState([]);
  const [cookingStepsArray, setCookingStepsArray] = useState([]);
  const [userRecipes, setUserRecipes] = useState({});
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [createButton, setCreateButton] = useState('');

  const removeAll = () => {
    setFoodImage(
      'https://i.pinimg.com/736x/d8/2c/a1/d82ca12786500210f3df344e2222d50e.jpg',
    );
    setInputCookingSteps('');
    setInputIngredients('');
    setIngredientsArray([]);
    setCookingStepsArray([]);
    setUserRecipes({});
    setTitle('');
    setDesc('');
  };

  useEffect(() => {
    const holderArray1 = inputIngredients.split(/\r?\n/);
    setIngredientsArray([...holderArray1]);
    const holderArray2 = inputCookingSteps.split(/\r?\n/);
    setCookingStepsArray([...holderArray2]);
  }, [inputIngredients, inputCookingSteps]);

  const addPhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setFoodImage(image.path);
    });
  };

  const createAndAddRecipe = () => {
    setUserRecipes({
      name: title,
      description: desc,
      ingredients: ingredientsArray,
      cookingSteps: cookingStepsArray,
      image: foodImage,
    });
  };

  const showConfirmDialog = () => {
    return Alert.alert('Redo?', 'Är du redo att lägga till receptet?', [
      {
        text: 'Ja!',
        onPress: () => {
          createRecipeTest();
          createAndAddRecipe();
          setTimeout(() => {
            removeAll();
          }, 3000);
        },
      },
      {
        text: 'Nej',
      },
    ]);
  };

  const createRecipeTest = () => {
    // const holderArray1 = inputIngredients.split(/\r?\n/);
    // setIngredientsArray([...holderArray1]);
    // const holderArray2 = inputCookingSteps.split(/\r?\n/);
    // setCookingStepsArray([...holderArray2]);
    // createAndAddRecipe(title, holderArray1, holderArray2, foodImage);
    console.log('title', title);
    console.log('description', desc);
    console.log('ingredientsArray', ingredientsArray);
    console.log('cookingStepsArray', cookingStepsArray);
    console.log('RECIPE after', userRecipes);
    console.log('userContext', userRecipesForContext);
    console.log('ingredientsinput', inputIngredients);
    console.log('cookingsinput', inputCookingSteps);
  };
  const AvatarContainer = styled.View`
    align-items: center;
    padding-bottom: 25px;
  `;

  return (
    <SafeArea>
      <ScrollView>
        <CreateRecipeContainer>
          <AvatarContainer>
            <TouchableOpacity onPress={addPhoto}>
              <ImageBackground
                source={{uri: foodImage}}
                style={{height: 250, width: 200, alignItems: 'center'}}
                imageStyle={{
                  borderRadius: 15,
                  borderColor: 'black',
                  borderWidth: 1,
                }}
              />
            </TouchableOpacity>
          </AvatarContainer>
          <TextInput
            label="Titel"
            mode="outlined"
            value={title}
            onChangeText={input => setTitle(input)}
          />
          <TextInput
            label="Beskrivning"
            mode="outlined"
            value={desc}
            onChangeText={input => setDesc(input)}
          />

          <TextInput
            placeholder="Tryck 'enter' för att lägga till fler"
            label="Ingredienser"
            multiline={true}
            mode="outlined"
            value={inputIngredients}
            onChangeText={input => setInputIngredients(input)}
          />
          <Text>(Tryck 'enter' för att lägga till fler)</Text>

          <TextInput
            label="Tillagning"
            multiline={true}
            mode="outlined"
            placeholder="Tryck 'enter' för att lägga till fler"
            value={inputCookingSteps}
            onChangeText={input => setInputCookingSteps(input)}
          />
          <Text>(Tryck 'enter' för att lägga till fler)</Text>
          <Spacer size="large" />
          <CreateRecipeButton
            mode="contained"
            onPress={() => {
              showConfirmDialog();
            }}>
            Skapa Receptet
          </CreateRecipeButton>
          <UserRecipeButton recipe={userRecipes} />
        </CreateRecipeContainer>
      </ScrollView>
    </SafeArea>
  );
};
