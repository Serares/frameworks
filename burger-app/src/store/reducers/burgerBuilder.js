import * as actionTypes from '../actions/actionTypes';


const initialState = {
    ingredients: null,
    totalPrice: 2,
    error: false
}


const INGREDIENT_PRICES = {

    salad: 0.3,
    bacon: 0.7,
    meat:  0.6,
    cheese: 0.2

}


const reducer = (state = initialState, action)=>{

    switch(action.type){

        case(actionTypes.ADD_INGREDIENT):
        // trebuie sa copiezi si ce se afla in ingredients pentru ca doar ...state copiaza shallow interiorul si daca accesezi state.ingredients.salad o sa duca direct la original ...ingredients distribuie proprietatile
        console.log()

        return {
            ...state,
            ingredients:{
                ...state.ingredients,
                [action.ingredientName] : state.ingredients[action.ingredientName] +1
            },
            totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            
        };

        case (actionTypes.REMOVE_INGREDIENT):

        return {
            ...state,
            ingredients:{
                ...state.ingredients,
                [action.ingredientName] : state.ingredients[action.ingredientName] -1
            },
            totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]

        };

        case (actionTypes.SET_INGREDIENTS):
        return {
            ...state,
            ingredients:{
                salad:action.ingredients.salad,
                bacon:action.ingredients.bacon,
                cheese:action.ingredients.cheese,
                meat:action.ingredients.meat,

            },
            totalPrice: 0,
            error:false
        }

        case actionTypes.FETCH_INGREDIENTS_FAILED:
        return {
            ...state,
            error: true
        }

        default:
        return state;
    }

}

export default reducer;