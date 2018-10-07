import React from 'react';

import {Navigation as Navbar} from '../components/nav/navbar';
import Post from '../components/post/Post';

import {Link} from 'react-router-dom';

const SinglePost = (props) => {
    
    return (
        <div className="single-post-container">
        <Navbar />
        <Post />
        <Link to="/">
        <div className="back-arrow">Back</div>
        </Link>
        <h1>{props.match.params.postId}</h1>
        </div>
        
    )
}


export default SinglePost;