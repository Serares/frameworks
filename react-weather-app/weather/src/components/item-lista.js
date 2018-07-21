

import React from 'react';

    class Item extends React.Component{
        
        selectareIndex = ()=>{
            const { selectareOra, index } = this.props;
            selectareOra(index);
        }


        render(){

            return(

                <div className="item-lista" onClick={this.selectareIndex}>
                <span id="icon"><img alt="imagine" src={`http://openweathermap.org/img/w/${this.props.icon}.png`} /></span>
                <span id="description">{this.props.description}</span>
                <span id="ora">{this.props.timp}</span>
                <div id="temp">Temp{this.props.temp}</div>
                <span id="tempMin">Min{this.props.tempMin}</span>
                <span id="tempMax">Max{this.props.tempMax}</span>
                </div>

            )
        }
    }

export default Item; 

