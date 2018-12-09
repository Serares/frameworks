import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';



class Blog extends Component {
    state = {
        posts:[],
        selectedPost: null
    };

    componentDidMount(){

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            // reduci datele pe care le primesti la doar 4 obiecte din array;

            const posts = response.data.slice(0,4);
            
            // faci copie la fiecare obiect in parte si ii adaugi proprietatea author, map returneaza array(in cazul asta un array cu obiecte)

            const updatedPosts = posts.map(post=>{
                return ({
                    ...post,
                    author:'Nelutu'
                })
            })

            this.setState({
                posts: updatedPosts
            })

            console.log(updatedPosts);
        })

    }

    postSelectedHandler = (id) =>{
        this.setState({
            selectedPost:id
        })
    }

    render () {

        const posts = this.state.posts.map((post) =>{
            return <Post 
            title={post.title} 
            key={post.id} 
            author={post.author} 
            clicked={()=>{this.postSelectedHandler(post.id)} } />
        })

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPost} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;