import React from 'react';
import Form from './form';
import Calendar from './calendar';
import './css/interfata.css';


class Interfata extends React.Component {
    constructor(){
        super()
        this.state ={
            ziua:0,
            luna:0,
            anul:0,
            saptamani:0,
            zile:0,
            overlay:false
        }
    }

    inWeeks = (d1, d2) =>{
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return parseInt((t1-t2)/(24*3600*1000*7));
    }
    
    inDays = (d1, d2) => {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return parseInt((t1-t2)/(24*3600*1000));
    }
   

    changeDay = (day) =>{
        this.setState({ziua: day})
    }

    changeMonth = (m) =>{
        this.setState({luna: m})
    }

    changeYear = (y) =>{
        this.setState({anul: y});
    }

    

    getWeeks = () =>{
        // aici este stringul cu zilele din inputuri
        var stringDate = `${this.state.anul},${this.state.luna},${this.state.ziua}`;
        //console.log(stringDate);
        // asta este data actuala mereu
        var now = new Date();
        // data din inputuri
        var dataTrecuta = new Date(stringDate);
        // convertirea in zile si saptamani
        var zile = this.inDays(now, dataTrecuta);
        var saptamani = this.inWeeks(now, dataTrecuta);
        // saptamanile pe care le convertesc in zile
        var zileInSaptamani = (saptamani*7);
        
        // zilele totale - zilele din saptamani
        var remainingD = (zile-zileInSaptamani);
        console.log(zileInSaptamani);
        this.setState({saptamani:saptamani,zile:remainingD});

    }

    // functie pentru validare:

    validare = () =>{

        var {ziua,luna,anul} = this.state;

        if(ziua==="" || luna==="" || anul===""){
            this.setState({overlay:true});

            setTimeout(function(){
                this.setState({overlay:false,zile:0,saptamani:0});
            }
            .bind(this)
            ,2000);
            

        }

    }


    render(){

        

        return(
            <div className ="main-container" >
                <div className="form-container">
                    <Form validareInputuri={this.validare} changeD={this.changeDay} changeL={this.changeMonth} changeA={this.changeYear} calculate={this.getWeeks} ziua={this.state.ziua} luna={this.state.luna} anul={this.state.anul}/>
                    <Calendar saptamani={this.state.saptamani} zile={this.state.zile} />
                </div>
            
                <div className="overlayError" style={{
                    display: this.state.overlay === true? 'block' : 'none'}}>Unul dintre inputuri este gol</div>    
                
            </div>
        )
    }
}



export default Interfata;