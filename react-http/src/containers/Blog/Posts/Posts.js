import React from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';

import './Posts.css';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

class Posts extends React.Component {

    state = {
        posts:[]
    };

    postSelectedHandler = (id) =>{
        // poti sa folosesti si history object ca sa navighezi spre pagini:
        this.props.history.push({pathname:'/posts/'+id})
        // this.props.history.push('/'+id)
    }

    componentDidMount(){
        console.log(this.props);
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

            //console.log(updatedPosts);
        })

    }

    render(){

        const posts = this.state.posts.map((post) =>{
            return (

            // <Link to={`/${post.id}`} key={post.id}>
            <Post 
                title={post.title} 
                key={post.id}
                match={this.props.match}
                author={post.author} 
                clicked={()=>{this.postSelectedHandler(post.id)} } />
            //</Link>)
            )
        })

        return (
            <div>
            <section className="Posts">
                    {posts}
            </section>
            <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        )
    }
}


export default Posts;