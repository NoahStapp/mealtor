export const RECIPES_ARE_LOADING = 'RECIPES_ARE_LOADING';
export const RECIPES_FETCH_SUCCESS = 'RECIPES_FETCH_SUCCESS';
export const RECIPE_GET_NEW = 'RECIPE_GET_NEW';

// Dispatcher for recipe loading
export function recipesAreLoading(bool) {
  return {
    type: RECIPES_ARE_LOADING,
    isLoading: bool
  };
};

// Dispatcher for a successful backend request
export function recipesFetchSuccess(recipes) {
  return {
    type: RECIPES_FETCH_SUCCESS,
    recipes
  };
};

// Dispatcher for get new recipe
export function recipeGetNew() {
  return {
    type: RECIPE_GET_NEW
  };
};

// Dispatcher for backend request, returns recipe data to Redux store
export function fetchRecipes() {
  return (dispatch, getState) => {
    // Recipes are loading
    dispatch(recipesAreLoading(true))
    // Get ingredients from store 
    const {ingredients} = getState().form.ingredients.values;
    console.log(ingredients);
    fetch("/api/fetch/" + ingredients)
      .then((response) => {
      dispatch(recipesAreLoading(false))
      return response
      })
      // JSONify data  
      .then((response) => response.json())
      // Send recipes to store, done loading
      .then((recipes) => dispatch(recipesFetchSuccess(recipes)));
    };
};