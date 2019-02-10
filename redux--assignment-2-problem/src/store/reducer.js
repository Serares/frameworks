

let initialState = {
    persons:[]
}

const reducer = (state = initialState, action)=>{


    switch(action.type){

        case 'ADD':
        const newPerson = {
                    id: new Date().getTime(),
                    name: action.personData.name,
                    age: action.personData.age
                }
                
        return {
            ...state,
            persons:state.persons.concat(newPerson)
            
        }
        
        case 'DELETE':

        const oldArr = state.persons.slice();
        const newArr = oldArr.filter(item => (item.id !== action.id))
        return {
            ...state,
            persons:newArr
        }

        default :
        return state;
    }


}


export default reducer;