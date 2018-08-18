

import React from 'react';


class ZiuaActuala extends React.Component{

    render(){
        const {nume,icon,dataOra,description,temperatura,temperaturaMin,temperaturaMax} = this.props;
        return(

            <div className="ziua-curenta">
            <div className="ziua-curenta-container">
            <div id="numeOras">{nume}</div>
            <div id="icon"><img alt="imagineZiCurenta" src={`http://openweathermap.org/img/w/${icon}.png`}/></div>
            <div className="ora">Data {dataOra}</div>
            <div id="descriere">{description}</div>
            <div id="temp"> Temp{temperatura} </div>
            <div id="tempMin">Min {temperaturaMin} </div>
            <div id="tempMin"> Max {temperaturaMax} </div>
            </div>
            </div>


        )
    }

}



export default ZiuaActuala; 