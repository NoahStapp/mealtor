import { RECIPES_ARE_LOADING, RECIPES_FETCH_SUCCESS, RECIPE_GET_NEW } from '../actions/actions';
import { combineReducers } from 'redux';

// Inital state for Redux store
const initialState = {
    ingredients: ['chicken', 'cheese', 'onions'],
    recipes: [],
    isLoading: false,
    hasRecipes: false,
    currentRecipe: null,
    recipeIndex: 0
};

// Updates state 
function storeData(state = initialState, action) {
    switch (action.type) {
        // Updates recipe loading state
        case RECIPES_ARE_LOADING:
            return Object.assign({}, state, {
                isLoading: action.isLoading
            });
        // Updates recipe existence state and calls helper functions
        case RECIPES_FETCH_SUCCESS:
            return Object.assign({}, state, {
                hasRecipes: true,
                recipes: action.recipes,
                currentRecipe: getNewRecipe(state.recipes, state.recipeIndex)
            });
        // Updates current recipe and calls helper functions
        case RECIPE_GET_NEW:
            return Object.assign({}, state, {
                recipeIndex: updateRecipeIndex(state.recipeIndex),
                currentRecipe: getNewRecipe(state.recipes, state.recipeIndex)
            });
        default:
            return state;
    };
};

// Helper function, gets a new recipe from the recipe array
function getNewRecipe(recipes, recipeIndex) {
    if (recipeIndex === recipes.length) {
        recipeIndex = 0;
    };
    return recipes[recipeIndex];
};

// Helper function, updates which recipes have been shown
function updateRecipeIndex(recipeIndex) {
    return recipeIndex += 1;
};

// function userInterface(state = initialState, action) {

// }

const mealtor = combineReducers({storeData});

export default mealtor