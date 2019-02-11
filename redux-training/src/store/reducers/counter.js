

import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    counter: 0
}


const reducer = (state = initialState,action) => {

    switch(action.type){
        
        case actionTypes.INCREMENT:

        return updateObject(state,{counter: state.counter+1})

        case actionTypes.DECREMENT:
        const newState = Object.assign({},state);
        newState.counter = state.counter -1;
        return newState;

        case actionTypes.ADD:
        return {
            ...state,
            counter : state.counter+action.value
        }

        case actionTypes.SUB:
        return {
            ...state,
            counter : state.counter-2
        }
        
    }


    return state;
}

export default reducer;