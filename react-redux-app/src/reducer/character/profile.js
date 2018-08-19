import {SET_CHARACTER_PROFILE} from './actions';

// reducerul asta trimite in state profilul caracterului
const initialState = {};

export default (state= initialState, action) =>{
    switch(action.type){
        case(SET_CHARACTER_PROFILE):
            return action.profile;
        default:
            return state;
    }
        
}

