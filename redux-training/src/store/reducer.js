import * as actionTypes from './actions/actionTypes';


const initialState = {
    counter: 0,
    results:[]
}


const reducer = (state = initialState,action) => {

    switch(action.type){
        case actionTypes.INCREMENT:

        return {
            ...state,
            counter : state.counter+1
        }

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
        case actionTypes.RESULT:
        return {
            ...state,
            results : state.results.concat({id:new Date().getTime(),value:state.counter})
        }

        case actionTypes.DEL:

        // const id = action.resultElId;
        // const newArr = [...state.results];
        // newArray.splice(id,1);
        
        const newArr = state.results.filter((item, index)=> item.id !== action.resultElId)
        return{
            ...state,
            results : newArr
        }
    }


    return state;
}

export default reducer;