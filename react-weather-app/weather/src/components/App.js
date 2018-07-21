
import React from 'react';
import Form from './form';
import { get } from 'axios';
import Lista from './lista-vreme';
import ZiuaActuala from './ziua-curenta';

class App extends React.Component{
    constructor(){
        super();

        this.state={
            nume:'',
            icon: '',
            dataOra:'',
            description: '',
            temperatura: '',
            temperaturaMin: '',
            temperaturaMax: '',
            prognoza:[],
            // asta este indexul
            oraSelectata:null
        }

    }

    // 

    // golire prognoza cand apesi pe arata vremea
    golirePrognoza = () =>{
        this.setState({prognoza:[]})
    }

    
    // arata indexul divului selectat;
    // si schimba datele din state dupa cume este this.state.prognoza[index]
    selectDate = (index) =>{
        this.setState({

            oraSelectata: index,
            icon: this.state.prognoza[index].weather[0].icon,
            dataOra:this.state.prognoza[index].dt_txt,
            description: this.state.prognoza[index].weather[0].description,
            temperatura: this.state.prognoza[index].main.temp,
            temperaturaMin: this.state.prognoza[index].main.temp_min,
            temperaturaMax: this.state.prognoza[index].main.temp_max,

        })
    }

    handleForm = (nume)=>{
        // cerere ajax cu axios pentru afisarea actuala de temp.
       get(`https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=${nume}`)

       .then((data)=>{

           console.log(data.data);

           var date = data.data;

           this.setState({
            nume: date['name'],
            icon: date.weather[0]['icon'],
            description: date.weather[0]['description'],
            temperatura: date.main['temp'],
            temperaturaMin: date.main['temp_min'],
            temperaturaMax: date.main['temp_max'],

        });
       })
       .catch(function(error){
           console.log(error);
       })
        
    }

    handlePrognoza = (nume) =>{
        // axios pentru prognoza


        get(`https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=${nume}`)

        .then((data)=>{
            var date= data.data;
            this.setState({prognoza: date.list})
        })
        .catch(function(error){
            console.log(error)
        })
    }


    render(){
        const {nume,icon, dataOra, description,temperatura,temperaturaMin,temperaturaMax} = this.state;
        return(

            <div className="container">

                <Form onSubmit={this.handleForm} onPrognoza={this.handlePrognoza} golirePrognoza={this.golirePrognoza} />

                {/* logica este ca atat timp cat this.state.icon este false nu va trece la urmatoarea comparatie */}
                {this.state.icon !== '' && <ZiuaActuala 
                nume={nume}
                icon={icon} 
                dataOra={dataOra} 
                description={description} 
                temperatura={temperatura} 
                temperaturaMin={temperaturaMin} 
                temperaturaMax={temperaturaMax} />
                }
                

                <Lista prognozaLs={this.state.prognoza} oraSelectata={this.selectDate} />

            </div>
        )
    }

}



export default App;