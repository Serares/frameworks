
import React from 'react';
import ReactDOM from '../node_modules/react-dom';
import './style.css'; 
import List from './list';



class App extends React.Component{

    constructor(props){
        super(props);

        this.state= {
            term: '',
            items:[]
        };
    }

    onSubmit = (event) =>{
        event.preventDefault()
        this.setState({
            term: '',
            items:[...this.state.items, this.state.term]
        });
    }

    onChange = (event) => {

        this.setState({term: event.target.value})
        
    }

    render(){
        return(
            <div>
            <div>Saltare</div>
            <form className="AppX" onSubmit={this.onSubmit}>

            <input value={this.state.term} onChange={this.onChange} />
            <input type="submit" value="Submit"/>
            </form>
            <List items={this.state.items}/>
            </div>
        )
    }

}


ReactDOM.render(<App />, document.getElementById('root'));
