import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AuthenticationContext} from '../../services/authentication/authentication.context';

export const UserRecipesContext = createContext();

export const UserRecipesContextProvider = ({children}) => {
  const {user} = useContext(AuthenticationContext);

  const [userRecipesForContext, setUserRecipesForContext] = useState([]);

  const saveRecipes = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@recipes-${uid}`, jsonValue);
    } catch (e) {
      console.log('error storing', e);
    }
  };

  const loadRecipes = async uid => {
    try {
      const value = await AsyncStorage.getItem(`@recipes-${uid}`);
      if (value !== null) {
        setUserRecipesForContext(JSON.parse(value));
      }
    } catch (e) {
      console.log('error loading', e);
    }
  };

  const add = recipe => {
    setUserRecipesForContext([...userRecipesForContext, recipe]);
  };

  const remove = recipe => {
    setUserRecipesForContext(userRecipesForContext.filter(r => r !== recipe));
  };

  useEffect(() => {
    if (user && user.uid) {
      loadRecipes(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.uid && userRecipesForContext.length) {
      saveRecipes(userRecipesForContext, user.uid);
    }
  }, [userRecipesForContext, user]);

  return (
    <UserRecipesContext.Provider
      value={{
        userRecipesForContext,
        addToUserRecipes: add,
        removeFromUserRecipes: remove,
      }}>
      {children}
    </UserRecipesContext.Provider>
  );
};
