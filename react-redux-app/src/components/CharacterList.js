import React from 'react';
import { connect } from 'react-redux';
import { setCurrentCharacter, getCharacterProfile} from '../reducer/character/actions';


const CharacterList = (props) =>{
    
    const characterAction = props.setCharacter
    
    return (
        <div className="col-md-4" id="character-list">
        <h1>Characters</h1>
        <ul>

            {
                    props.characters.map((c,i)=>{
                    return(
                        <li key={c.name} onClick={characterAction(i + 1)}>
                        {c.name}
                         </li>
                    )
                    
                })
            }
            
        </ul>
        </div>
    )
}

// trimite props catre componenta din state
const mapStateToProps =({characters}) => {
    return (
        {
            characters,
        }
    )
}

// trimit functia asta la propsul componentei
const mapDispatchToProps = dispatch => ({
    setCharacter(id) {
      return () => {
        dispatch(setCurrentCharacter(id));
        dispatch(getCharacterProfile(id));
      };
    },
  });


export default connect(mapStateToProps,mapDispatchToProps)(CharacterList);