import {SET_CHARACTER_WORLD} from './actions';


var initialState = {};

export default (state=initialState, action) =>{
    switch(action.type){
        case(SET_CHARACTER_WORLD):
            console.log(action);
            return action.world;
        default:
            return state;
    }
}
