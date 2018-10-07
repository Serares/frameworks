import React from 'react';



class  Comment extends React.Component {


    constructor(props){
        super(props)
        
    }


    onComment = (e) =>{
        var content = e.target.value;
        this.props.commentHandler(content)

    }

    handlePost = (e)=>{
        
        console.log('post')
        this.props.submitPost()
    }

    render(){
        return (
            <div className="comment-container">

                <form>
                    <textarea maxLength="240" onKeyUp={this.onComment} />
                    <input type="button" value="Post" onClick={this.handlePost}/>
                </form>

            </div>
        )
    }



}


export default Comment;