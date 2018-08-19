import React from 'react';
import CharacterList from './CharacterList';
import CharacterProfile from './CharacterProfile';
import CharacterWorld from './CharacterWorld';

const App = () => {
    
    return(

    <div className = 'container'>

    <div className = 'row'>

        <CharacterList />
        <CharacterProfile />
        
    </div>
    
    <div className="row">
    
        <CharacterWorld />

    </div>

    </div>
    )
    

}


export default App
