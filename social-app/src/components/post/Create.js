import React from 'react';


class CreatePost extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            content : ""
        }
    }


    handleChange = (e)=> {
        var text = e.target.value;
        this.setState({
            content: text
        })
    }

    handleEnter = (e) =>{
        

        if(e.keyCode === 13) {
            this.handleSubmit(e);
        }
        
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        var content = this.state.content;
        this.props.handleSubmit(content);
        this.setState({
            content:""
        });

    }


    render(){

        return(
            <div className="create-post-container">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Write something .." onChange={this.handleChange} value={this.state.content} onKeyUp={this.handleEnter}/>
                    <input  type="submit" value="Post it"/>
                </form>
            </div>

        )
    }

}


export default CreatePost;