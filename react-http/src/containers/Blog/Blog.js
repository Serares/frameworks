import React, { Component } from 'react';
import {Route,NavLink} from 'react-router-dom';

import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';
import './Blog.css';



class Blog extends Component {
    


    render () {

        return (
            <div className="Blog" >
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink 
                            to="/" 
                            exact
                            activeClassName="my-active"
                            activeStyle={{
                                color:'#666',
                                textDecoration:"underline"
                            }}>Home</NavLink></li>

                            <li><NavLink to={{
                                pathname:'/new-post',
                                hash: '#search',
                                search:'nume=post1'
                                
                            }}>Single Post</NavLink></li>
                        </ul>
                    </nav>
                </header>

                {/* <Route path="/" exact render={()=><h1>Home</h1>} />
                <Route path="/new-post" exact render={()=><h1>New Post</h1>} /> */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={NewPost} />
                <Route path="/:id" exact component={FullPost} />
            </div>
        );
    }
}

export default Blog;