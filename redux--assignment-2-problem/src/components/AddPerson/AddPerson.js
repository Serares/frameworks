import React, { useState } from 'react';

import './AddPerson.module.css';

class AddPerson extends React.Component{
    
    state={
        name:'',
        age:''
    }



    render(){
        return( <div className="AddPerson">
        <input type="text" name="Name" placeholder="Name"  onChange={(e)=>{this.setState({name:e.target.value})}} value={this.state.name}/>
        <input type="text" name="Age" placeholder="Age" onChange={ (e)=>{this.setState({age:e.target.value})} } value={this.state.age}/>
        <button onClick={()=>{this.props.personAdded(this.state.name,this.state.age)}}>Add Person</button>
        </div>
        )
    }

}


export default AddPerson;