import {API_URL} from '../../constants';
import {proxyUrl} from '../../constants';



export const SET_CURRENT_CHARACTER = 'SET_CURRENT_CHARACTER';
export const SET_CHARACTER_PROFILE = 'SET_CHARACTER_PROFILE';
export const SET_CHARACTER_WORLD = 'SET_CHARACTER_WORLD';




// fetch ca sa iau datele despre profilul caracterului pe care le pun apoi intr-o actiune ce trimite obiectul cu datele catre reducer


export function getCharacterProfile(id){
    return dispatch => {
        fetch(proxyUrl+`${API_URL}/people/${id}`)
        .then(res=> res.json())
        .then(profile=>{
            dispatch(setCharacterProfile(profile));
            dispatch(getCharacterWorld(profile.homeworld));
        })
    }
}

export function setCharacterProfile(profile){

    return {
        type: SET_CHARACTER_PROFILE,
        profile,
    }

}


export function setCurrentCharacter(id){
    return {
        type: 'SET_CURRENT_CHARACTER',
        id,
    }
}

export function getCharacterWorld(url) {
    return dispatch =>
      fetch(url)
        .then(res => res.json())
        .then(world =>
          dispatch(setCharacterWorld(world))
        )
        .catch(function(error) {
            console.log('Request failed', error);
          });
  }

  export function setCharacterWorld(world){
      return {
          type : SET_CHARACTER_WORLD,
          world,
      }
  }
