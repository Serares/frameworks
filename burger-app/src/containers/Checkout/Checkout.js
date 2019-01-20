import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import ContactData from './ContactData/ContactData';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'; 

// afiseaza burgerul comandat

class Checkout extends Component {

    constructor(props){
        super(props);

        this.state = {
            ingredients:null,
            price: 0
        }
    }

    componentWillMount(){
        // ca sa parguri query parameters din url poti sa folosesti si keys in loc de entries dar iti returneaza doar cheia fara valoare
        const queryParams = new URLSearchParams(this.props.location.search).entries();
        let newIngredients = {};
        let price = 0;
        // i va arata ['salad','1']
        for(let i of queryParams){
            if(i[0] === 'price'){
                price = i[1]
            } else {
                newIngredients[i[0]]= +i[1]
            }
            
        }
        console.log(newIngredients)
        this.setState({
            ingredients: newIngredients,
            price: price
        })
        
    }

    componentDidMount() {
        console.log(this.props)
    }

    cancelOrder = () =>{
        this.props.history.goBack();
    }

    continueOrder = () =>{
        this.props.history.replace({pathname:'/checkout/contact-data'})
    }
    
    render(){
        
        return (

            <div>

            <CheckoutSummary 
            cancelOrder={this.cancelOrder}
            continueOrder={this.continueOrder}
            ingredients={this.state.ingredients} />
            {/* nested route aici apare in componenta asta componenta ContactData */}
            <Route path={this.props.match.url + '/contact-data'} render={(props)=>(<ContactData ingredients={this.state.ingredients} price={this.state.price} {...props} />)} />

            </div>
        
        )
    }
}


export default Checkout;