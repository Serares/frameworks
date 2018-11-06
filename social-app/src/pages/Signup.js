import React from 'react';
import axios from 'axios';
import { Redirect , Link } from 'react-router-dom';

class Signup extends React.Component {
    constructor(props){
        super(props)

        this.state={

            email: '',
            password:'',
            name: '',
            lastname:'',
            redirect: false

        }
    }

    // TO DO
    // generateRandomPicture = ()=>{
    //     function getRandomInt(min, max) {
    //         return Math.floor(Math.random() * (max - min + 1)) + min;
    //     }
    //     const arrPics = [];
    // }

    handleEmail = (e) =>{
        var val = e.target.value;
        this.setState({
            email:val
        })
    }
    handlePassword = (e) =>{
        var val = e.target.value;
        this.setState({
            password:val
        })
    }
    handleName = (e) =>{
        var val = e.target.value;
        this.setState({
            name:val
        })
    }

    handleLastname = (e) =>{
        var val = e.target.value;
        this.setState({
            lastname:val
        })
    }

    handleSubmit = (e)=>{

        e.preventDefault();
        
        const uniqID = new Date().getTime();
        const defaultPicture = 'https://www.ucas.com/sites/default/files/default_images/default_avatar.png';
        const emailS = this.state.email;
        const passW = this.state.password;
        const name = this.state.name;
        const lastname = this.state.lastname; 

        this.props.signupHandler(emailS,passW);

        axios.post('https://react-store-40571.firebaseio.com/users.json',{

            id: uniqID,
            name: name,
            lastname:lastname,
            email:emailS,
            password: passW,
            picture:defaultPicture

        })
        .then( (response)=> {
            console.log(response);

            this.setState({
                email:'',
                password:'',
                name:'',
                lastname:'',
                redirect: true
            })

          })
          .catch(function (error) {
            console.log(error);
          })
    }

    

   render(){ 
       
    if(this.state.redirect){
        return(
    
            <Redirect to={{pathname:'/login'}}/>
            
            )
    } 

    return (

        <div className="container-signup">
        <div className="signup-title">
        <h2>Sign up</h2>
        </div>
        {/* this needs to be validated */}
        <form onSubmit={this.handleSubmit}>
            <div className="inputs-container">
            <input type="text" placeholder="Name" id="name" onChange={this.handleName} value={this.state.name}/>
            <input type="text" placeholder="Lastname" id="lastname" onChange={this.handleLastname} value={this.state.lastname} />
            <input type="email" placeholder="Email" id="email" onChange={this.handleEmail} value={this.state.email}/>
            <input type="password" placeholder="password" id="password" onChange={this.handlePassword} value={this.state.password} />
            {/* make validation for the rePassword */}
            <input type="password" placeholder="Retype Password" id="rePassword"/>
            <input type="submit" value="Register" />
            <input type="checkbox" id="checked" /> <span>I accept all statements in <u>Terms of Service</u></span>
            </div>
        </form>
        <div><u>Already have an account?</u> <Link to="/login">Go to login page</Link></div>
        </div>

    )

    }
}


export default Signup