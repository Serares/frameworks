import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';


import './NewPost.css';

class NewPost extends Component {
    
    state = {
        title: '',
        content: '',
        author: 'Nelutu',
        submitted:false
    }


    postRequest = ()=>{
        let post = {
            title:this.state.title,
            content: this.state.content,
            author: this.state.author
        }

        axios.post('https://jsonplaceholder.typicode.com/posts/',post)
        .then(response=>{
            console.log(response);
            // poti sa foloseste history replace ca si Redirect si inlocuieste pagina ca sa nu poti sa dai back de la browser
            this.props.history.push({pathname:'/posts'})
            //this.setState({submitted:true})
        })
    }

    render () {
        // conditional redirecting
        // let redirect = null;
        // if(this.state.submitted){
        //     redirect = <Redirect to="/posts" />
        // }
        return (
            <div className="NewPost">
                {/* {redirect} */}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Nelutut">Nelutu</option>
                    <option value="Boy">Boy</option>
                </select>
                <button onClick={this.postRequest}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;