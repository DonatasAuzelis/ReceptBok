import data from './mock/recipes.json';

export const recipesRequest = () => {
  return new Promise((resolve, reject) => {
    const mock = data.results;
    if (!mock) {
      reject('not found');
    }
    resolve(mock);
  });
};
