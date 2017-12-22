import {recipesAreLoading, recipesFetchSuccess, fetchRecipes } from '../actions/actions'

const initialState = {
    ingredients: [],
    isLoading: false,
    hasRecipes: false,
    currentRecipe: null,
    recipeIndex: 0
}

function storeData(state = initialState, action) {
    switch (action.type) {
        case RECIPES_ARE_LOADING:
            return Object.assign({}, state, {
                isLoading: action.isLoading
            })
        case RECIPES_FETCH_SUCCESS:
            return Object.assign({}, state, {
                hasRecipes: true,
                recipes: orderRecipes(action.recipes),
                currentRecipe: getNewRecipe(recipes, recipeIndex)
            })
        case RECIPE_GET_NEW:
            return Object.assign({}, state, {
                recipeIndex: updateRecipeIndex(state.recipeIndex),
                currentRecipe: getNewRecipe(recipes, recipeIndex)
            })
        default:
            return state
    }
}

function orderRecipes(recipes) {
    var recipeArray = new Array();
    recipeArray.push(recipes)
    return recipeArray
}

function getNewRecipe(recipes, recipeIndex) {
    if (recipeIndex == length(recipes)) {
        recipeIndex = 0
    }
    return recipes[recipeIndex]
}

function updateRecipeIndex(recipeIndex) {
    return recipeIndex += 1
}

// function userInterface(state = initialState, action) {

// }