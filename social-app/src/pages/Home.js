import React from 'react';


import {Navigation as Navbar} from '../components/nav/navbar';
import Posts from '../components/post/Posts';

import axios from 'axios';

class Home extends React.Component {
    constructor(){
        super()

        this.state = {

        loggedIn: false,
        userLogged:{},
        users : []

    }

}


    componentDidMount(){

        
        axios.get('https://react-store-40571.firebaseio.com/.json')
        .then((resp) =>{
            
        })
        
        .catch(function(err){
            console.log(err)
        })

        
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