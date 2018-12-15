import React, { Component } from 'react';
import {Route,NavLink, Switch, Redirect} from 'react-router-dom';


import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';
import './Blog.css';



class Blog extends Component {
    
    state={
        auth:false
    }


    render () {

        return (
            <div className="Blog" >
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink 
                            to="/posts" 
                            // poti sa pui exact aici si o sa se intample style doar daca este /posts dar fara o sa functioneze si la /posts/:id
                            activeClassName="my-active"
                            activeStyle={{
                                color:'#667',
                                textDecoration:"underline"
                            }}>Posts</NavLink></li>

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
                
                {/* switch ajuta sa faca render doar la un route */}
                
                <Switch>
                    {/* guarded route */}
                {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null}
                <Route path="/posts" component={Posts} />
                {/* not found page */}
                <Route render={() =><h1>Not found</h1>} />
                {/* poti sa foloseste redirect cu from doar in switch tag */}
                {/* <Redirect from="/" to="/posts" /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;