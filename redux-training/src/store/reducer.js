
const initialState = {
    counter: 0,
    results:[]
}


const reducer = (state = initialState,action) => {

    switch(action.type){
        case 'INCREMENT':
        return {
            ...state,
            counter : state.counter+1
        }
        case 'DECREMENT':
        const newState = Object.assign({},state);
        newState.counter = state.counter -1;
        return newState;
        case 'ADD':
        return {
            ...state,
            counter : state.counter+action.value
        }
        case 'SUB':
        return {
            ...state,
            counter : state.counter-2
        }
        case 'RESULT':
        return {
            ...state,
            results : state.results.concat({id:new Date().getTime(),value:state.counter})
        }

        case 'DEL':
        const newArr = state.results.filter(res=> res.id !== action.resultElId)
        return{
            ...state,
            results : newArr
        }
    }


    return state;
}



export default reducer;