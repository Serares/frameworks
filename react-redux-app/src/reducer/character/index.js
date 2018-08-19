import {combineReducers} from 'redux';
import id from './id';
import profile from './profile';
import world from './world';

export default combineReducers({
    id:id,
    profile:profile,
    world:world
})
