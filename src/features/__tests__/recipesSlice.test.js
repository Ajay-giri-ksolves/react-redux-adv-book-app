import recipesReducer, { addRecipe, removeRecipe, setRecipes } from '../recipesSlice';

describe('recipesSlice', () => {
  const initialState = [];

  it('should return the initial state', () => {
    expect(recipesReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle addRecipe', () => {
    const newRecipe = { id: 1, name: 'Recipe 1' };
    expect(recipesReducer(initialState, addRecipe(newRecipe))).toEqual([newRecipe]);
  });

  it('should handle removeRecipe', () => {
    const initialState = [{ id: 1, name: 'Recipe 1' }];
    expect(recipesReducer(initialState, removeRecipe({ id: 1 }))).toEqual([]);
  });

  it('should handle setRecipes', () => {
    const recipes = [{ id: 1, name: 'Recipe 1' }, { id: 2, name: 'Recipe 2' }];
    expect(recipesReducer(initialState, setRecipes(recipes))).toEqual(recipes);
  });
});
