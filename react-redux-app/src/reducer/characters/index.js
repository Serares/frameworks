
import { SET_CHARACTERS } from './actions';

// reducerul primeste actiunea ca obiect si primeste si datele din actions.
const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
      case SET_CHARACTERS:
        console.log(SET_CHARACTERS);
        return action.characters;

      default:
        return state;
    }
  };


