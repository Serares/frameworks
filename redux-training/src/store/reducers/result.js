import * as actionTypes from '../actions';


const initialState = {
    results:[]
}


const reducer = (state = initialState,action) => {

    switch(action.type){
        
        case actionTypes.RESULT:
        return {
            ...state,
            results : state.results.concat({id:new Date().getTime(),value:action.result})
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