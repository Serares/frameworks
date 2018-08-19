import React from 'react';
import { connect } from 'react-redux';

// destrucuring la props ca sa extrag doar profile

const CharacterProfile = (props) =>{
    const profile = props.profile.profile;
    return (
        <div id="character-profile" className="col-md-4">
            <h1>Profile</h1>
            {profile.name && <p>Name: {profile.name}</p>}
            {profile.height && <p>Height: {profile.height}cm</p>}
            {profile.mass && <p>Weight: {profile.mass}kg</p>}
            {profile.gender && <p>Gender: {profile.gender}</p>}
        </div>
    )
    

}

    


const mapStateToProps = ({character:profile}) =>({
    profile,
})


export default connect(mapStateToProps)(CharacterProfile);