import { API_URL } from '../../constants';
// folosesc un proxy server ca sa pot face cererea fara probleme de la CORS pentru ca nu primesc headere
import { proxyUrl as PROXY_URL } from '../../constants';


export const SET_CHARACTERS = 'SET_CHARACTERS';
// fetch ca sa aduc toate datele din API.

export function getCharacters() {
  return dispatch =>
    fetch(PROXY_URL+`${API_URL}/people`)
      .then(res => res.json())
      .then(res => {
        // console.log(res.results)
        return res.results
      })
      .then(characters =>{
        //console.log('dispatch serCharacters',dispatch(setCharacters(characters)))
        return dispatch(setCharacters(characters));
      }
        
      ).catch(function(error) {
        console.log('Request failed', error);
      });
}

// asta este actiunea pe care o trimit la reducer
export function setCharacters(characters){
    return {
        type : SET_CHARACTERS,
        characters
    }
}


