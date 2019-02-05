

let initialState = {
    persons:[]
}

const reducer = (state = initialState, action)=>{


    switch(action.type){

        case 'ADD':
        const newPerson = {
                    id: Math.random(),
                    name: 'Max',
                    age: Math.floor( Math.random() * 40 )
                }
        const oldPersons = state.persons.slice();
        const newArrP = oldPersons.concat(newPerson);
        return {
            ...state,
            persons:newArrP
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