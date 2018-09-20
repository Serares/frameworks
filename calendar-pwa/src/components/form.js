import React from 'react';
import './css/form.css';



// inserez data actuala si trimit datele catre stat-ul de interfata:
class Form extends React.Component {

    changeDay= (event) =>{
        this.props.changeD(event.target.value);
    }

    changeLuna= (event) =>{
        this.props.changeL(event.target.value);
    }

    changeAnul= (event) =>{
        this.props.changeA(event.target.value);
    }



    updateData = (e) =>{
        e.preventDefault();
        // validare:
        this.props.validareInputuri();
        this.props.calculate()
        

    } 

    render(){
        var {ziua , luna , anul } = this.props;

        if(ziua === ""){console.log('invalid')}

        return (

        <div className="Form">

            <div className="titlu"><span>Adauga data :</span></div>

            <div className="inputuri">
            <div className="table-header">
            <div>Ziua</div>
            <div>Luna</div>
            <div>Anul</div>
            </div>
            <form onSubmit={this.updateData}>
                <input type="number" placeholder="Ziua" min="1" max="31" onChange={this.changeDay} value={ziua} />
                <input type="number" placeholder="Luna" min="1" max ="12" onChange={this.changeLuna} value={luna} />
                <input type="number" placeholder="Anul" min="2018" max ="2090" onChange={this.changeAnul} value={anul} />
                <input id="buton-calculare" type="submit" value="Afiseaza"/>
            </form>
            </div>

            

        </div>
        
        )
    }
       
    

}


export default Form;
