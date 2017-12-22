export const FETCH_RECIPES = 'FETCH_RECIPES'
export const RECIPES_ARE_LOADING = 'RECIPES_ARE_LOADING'
export const RECIPES_FETCH_SUCCESS = 'RECIPES_FETCH_SUCCESS'

export function recipesAreLoading(bool) {
    return {
        type: RECIPES_ARE_LOADING,
        isLoading: bool
    };
}

export function recipesFetchSuccess(recipes) {
    return {
        type: RECIPES_FETCH_SUCCESS,
        recipes
    }
}

export function fetchRecipes() {
    return (dispatch, getState) => {
        dispatch(recipesAreLoading(true))
        ingredients = getState().ingredients
        console.log(ingredients)
        fetch('/api/fetch/'+ingredients)
            .then((response) => {
                dispatch(recipesAreLoading(false));
                return response
            })
            .then((response) => response.json())
            .then((recipes) => dispatch(recipesFetchSuccess(recipes)))
    }
}