import React from 'react';

const Post = ({contentPost,userImage,ident}) =>{


    return (

        <div className="post" id={ident}>

            <div className="user-image"><img src={userImage} style={{width:`20px`,height:'20px'}}/></div>
            <div className="content-post">{contentPost}</div>

        </div>
        
    )

}


export default Post;