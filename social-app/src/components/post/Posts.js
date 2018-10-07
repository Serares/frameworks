import React from 'react';
import {Link, Route} from 'react-router-dom';

import Post from './Post';
import CreatePost from './Create';

import axios from 'axios';


class Posts extends React.Component {
    constructor(){
        super()
        this.state = {

            posts : {}

        }
    }

    // trebuie sa pun content in comment pentru ca de fiecare data cand apasi un buton face render pentru toate posturile not efficient;
    commentHandler = (com)=>{
        this.setState({
            content : com
        })
    }

    


    componentDidMount(){
        // get req
        axios.get(`https://react-store-40571.firebaseio.com/posts.json`)
        .then((resp)=>{
            // fac un get pentru posturi ca sa nu modific direct datele si creez un array nou de posturi
            var posts = resp.data;
            var newPosts = Object.assign({}, posts);
            this.setState({
                posts:newPosts
            })
            console.log(resp);
        })
        .then(function(){
            console.log('get mount')
        })
    }

    submitPost = (content) =>{
       
        var identPost = new Date().getTime();
        

        console.log(content);
        // post req
        axios.post(`https://react-store-40571.firebaseio.com/posts.json`,{
                content: content,
                postId: identPost,
                userId: 123
        })
        .then( (response)=> {

            // fetch for get at the end of the post to rerender the component with new data;
            console.log(response);
            fetch('https://react-store-40571.firebaseio.com/posts.json')
            .then(response => response.json())
            .then(data => {
                var posts = data;
                var newPosts = Object.assign({}, posts);
                this.setState({
                    posts: newPosts
                })

            console.log(data,"fetch ")
            });
          })
          .catch(function (error) {
            console.log(error);
          });
           

    }


    render(){
        var posts = this.state.posts;
        
        return (
            <div className="posts-container">
            <CreatePost handleSubmit={this.submitPost} />
            {/* iterete through objects in reverse to show the latest post */}
            {Object.keys(posts).slice(0).reverse().map((pos,index)=>{
                return(
                    <Link to={`/posts/${pos}`} key={index}>
                    <div className="post-container" key={index} id={pos}>
                    <Post contentPost={posts[pos].content} userImage={'https://artofwalent.files.wordpress.com/2011/02/img_step4.jpg'} ident={posts[pos].postId} key={index}/>
                    </div>
                    </Link>
                    )
            })}
               
            </div>
        )
    }

}

export default Posts;