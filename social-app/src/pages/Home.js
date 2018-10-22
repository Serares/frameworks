import React from 'react';

import {Navigation as Navbar} from '../components/nav/navbar';
import Posts from '../components/post/Posts';


class Home extends React.Component {
    constructor(){
        super()

        this.state = {

        loggedIn: false,
        userLogged:{},
        users : []

    }

}


    render(){
        return(

            <div className="home-comp">
           
            <Navbar />
            <Posts />

            </div>
        )
    }

}

export default Home;