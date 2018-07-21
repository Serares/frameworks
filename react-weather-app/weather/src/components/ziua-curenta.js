

import React from 'react';


class ZiuaActuala extends React.Component{

    render(){
        const {nume,icon,dataOra,description,temperatura,temperaturaMin,temperaturaMax} = this.props;
        return(

            <div className="ziua-curenta">
            <div id="numeOras">{nume}</div>
            <div id="icon"><img alt="imagineZiCurenta" src={`http://openweathermap.org/img/w/${icon}.png`}/></div>
            <div className="ora">{dataOra}</div>
            <div id="descriere">{description}</div>
            <span id="temp"> {temperatura} </span>
            <span id="tempMin"> {temperaturaMin} </span>
            <span id="tempMin"> {temperaturaMax} </span>

            </div>


        )
    }

}



export default ZiuaActuala; 