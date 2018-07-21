

import React from 'react';
import Item from './item-lista';

class Lista extends React.Component{


    render(){
        return(
            <div className="lista-vreme">

                {/* itereaza prin arrayul din App.js prognoza si scoate datele ca sa le trimita ca props catre item-lista.js(Item) */}

                {this.props.prognozaLs.map((ora,index) =>{
                    // console.log(ora);
                   return(
                    <Item 
                        key={ora.dt}
                        icon={ora.weather[0].icon}
                        description={ora.weather[0].description}
                        temp={ora.main.temp}
                        tempMin={ora.main.temp_min}
                        tempMax={ora.main.temp_max}
                        timp={ora.dt_txt}
                        index={index}
                        selectareOra={this.props.oraSelectata}
                    />
                   ) 
                   
                })}

            </div>
        )
    }

}


export default Lista;