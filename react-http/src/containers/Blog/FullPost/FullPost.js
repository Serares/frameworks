import React, { Component } from 'react';

import './FullPost.module.css';
import axios from 'axios';

class FullPost extends Component {
    
    state = {
        loadedPost: null
    }

    componentDidMount(){
        console.log(this.props.match)
        if(this.props.match.params.id){
            //console.log('didUpdate')
            // faci cererea http doar daca loadedPost este null si daca exista si id-ul este diferit de id-ul care exista deja in props.id
        if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)){
           axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
           .then(response=>{
               
               this.setState({
                   loadedPost: response.data
               })
           }) 
        }
    }

    }


    handleDelete = () =>{
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
        .then(response =>{
            console.log(response)
        })
    }

    render () {

        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;

        if(this.props.id){

            post = <p style={{textAlign:'center'}}>Loading...</p>;
            
        }

        if(this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p> 
                    <div className="Edit">
                        <button onClick={this.handleDelete} className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;




