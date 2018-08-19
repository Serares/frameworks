import {API_URL} from '../../constants';
import {proxyUrl} from '../../constants';



export const SET_CURRENT_CHARACTER = 'SET_CURRENT_CHARACTER';
export const SET_CHARACTER_PROFILE = 'SET_CHARACTER_PROFILE';


// fetch ca sa iau daatele despre profilul caracterului pe care le pun apoi intr-o actiune ce trimite obiectul cu datele catre reducer
export function getCharacterProfile(id){
    return dispatch => {
        fetch(proxyUrl+`${API_URL}/people/${id}`)
        .then(res=> res.json())
        .then(profile=>
            dispatch(setCharacterProfile(profile))
        )
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