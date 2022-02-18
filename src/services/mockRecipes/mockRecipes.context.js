import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useMemo,
} from 'react';
import {recipesRequest} from './mockRecipes.service';

export const MockRecipesContext = createContext();
export const MockRecipesContextProvider = ({children}) => {
  const [mockRecipes, setMockRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMockRecipes = () => {
    setIsLoading(true);
    setMockRecipes([]);
    setTimeout(() => {
      recipesRequest()
        .then(results => {
          setIsLoading(false);
          setMockRecipes(results);
        })
        .catch(error => {
          setIsLoading(false);

          setError(error);
        });
    }, 2000);
  };

  useEffect(() => {
    getMockRecipes();
  }, []);

  return (
    <MockRecipesContext.Provider value={{mockRecipes, isLoading, error}}>
      {children}
    </MockRecipesContext.Provider>
  );
};
