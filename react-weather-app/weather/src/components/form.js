import React from 'react';

class Form extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            nume: ''
        }
    }

    golirePrognoza = () =>{
        this.props.golirePrognoza();
    }

    // functie pentru enter pe input 
    handleEnter = (e)=>{
        if(e.key === 13){
            this.subitOras(e);
        }
    }

    // functie care duce catre parintele App.js pentru a face request la prognoza 
    handlePrognoza = (e) =>{
        e.preventDefault();
        this.props.onPrognoza(this.state.nume);
        this.setState({nume:''});
    }

    // functie pentru temperatura actuala
    submitOras = (e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state.nume);
        this.setState({nume:''});
    }

    handleNume = (e)=>{
        this.setState({nume: e.target.value});
    }

    render(){
        return(
            <div className="form-container">
            <form onSubmit={this.submitOras}>

            <label htmlFor="inputO">Scrie Orasul</label>

            <input 
            type="text" 
            name="inputO" 
            placeholder="Oras" 
            value={this.state.nume} 
            onChange={this.handleNume} 
            onKeyPress={this.handleEnter} />

            <input 
            type="submit" 
            value="Arata Vremea" 
            onClick={this.golirePrognoza}
            />

            <input 
            type="submit" 
            value="Prognoza" 
            onClick={this.handlePrognoza} />

            </form>
            </div>
        )
    }


}



export default Form;