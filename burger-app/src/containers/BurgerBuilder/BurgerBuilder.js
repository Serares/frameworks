import React,{ Component } from 'react';
import axios from '../../axios-orders';


import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import * as actionTypes from '../../store/actions';
import { connect } from 'react-redux';



// CONTAINER THAT HOLDS STATE

class BurgerBuilder extends Component {

    state = {

        purchasing: false,
        loading: false,
        error: false

    }


    
    // pot sa ii dau ca argument this.props.ingr ca sa manageriez butonul de order disabled sau pot sa manageriez purchaseble in redux
    updatePurchase(updatedIngredients){

        // aduni valorile ingredientelor :
        const sum = Object.keys(updatedIngredients).map(key =>{
            return updatedIngredients[key]
        }).reduce((sum,el)=>{
            
            return sum + el
        },0)
        
        

        return sum > 0
        

    }

    // nu mai este nevoie de handlere pentru ca le folosesc in redux

    // handleAdding = (type) =>{
    //     // aici doar incrementezi valorile ingredientelor.

    //     const oldIngredient = this.state.ingredients[type]; //este un int 
    //     const newIngredient = oldIngredient + 1;
    //     //console.log({...this.state.ingredients})
    //     // copie a obiectului
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     }

    //     updatedIngredients[type] = newIngredient; // se incrementeaza doar valorile

    //     const oldPrice = this.state.price;
    //     const newPrice = oldPrice + INGREDIENT_PRICES[type]



    //     this.setState({
    //         ingredients : updatedIngredients,
    //         price: newPrice
    //     })

    //     // trebuie sa ii pasezi updatedIngredients ca sa tine evidenta in timp real la state; altefel nu se updateaza butonul cum trebuie si ramane in urma
    //     this.updatePurchase(updatedIngredients);

    // }

    // handleRemoving = (type) =>{
    //     // este la fel ca adding doar ca scade valorile
        
    //     const oldIngredient = this.state.ingredients[type];
    //     const newIngredient = oldIngredient - 1;
    //     //console.log({...this.state.ingredients})
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     }

    //     updatedIngredients[type] = newIngredient;

    //     const oldPrice = this.state.price;
    //     const newPrice = oldPrice - INGREDIENT_PRICES[type]



    //     this.setState({
    //         ingredients : updatedIngredients,
    //         price: newPrice
    //     })

    //     this.updatePurchase(updatedIngredients);

    // }


    purchaseHandler=()=>{

        this.setState({
            purchasing: true
        })

    }

    closeModal = ()=>{
        this.setState({
            purchasing: false
        })
    }

    continuePurchase = () =>{

        //alert('Purchased');
        // nu mai este nevoie de query params cand ai redux :)
        
        // const queryParams = [];
        // for (let i in this.state.ingredients) {
        //     queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        // }
        // queryParams.push('price=' + this.state.price);
        // const queryString = queryParams.join('&');
        // this.props.history.push({
        //     pathname: '/checkout',
        //     search: '?' + queryString
        // });

        this.props.history.push('/checkout');

    }


    componentDidMount() {
        
        console.log(this.props);
        // nu mai este nevoie de fetch de pe server pentru ca am datele in reducer

        // axios.get('/ingredients.json')

        // .then(response=>(
        //     this.setState({
        //         ingredients: response.data
        //     })
        // ))
        // .catch(error=>this.setState({error:error}))
    }

    render() {

        // trimiti bool daca in ingredients sunt <= 0 ca sa fie disabled butoanele LESS
        const ingredientsCopy = {
            ...this.props.ingr
        }

        for(let key in ingredientsCopy){
            ingredientsCopy[key] = ingredientsCopy[key] <= 0
        }

        // pui spinner in modal in caz ca se face fetch la date 
        let orderSummary = null;


        let burger = this.state.error ? <p>Ingredients can't load</p> : <Spinner />;

        if(this.props.ingr){

        burger = (
        <React.Fragment>
        <Burger ingredients={this.props.ingr} />
        <BuildControls
        addIngredient={this.props.addedIngredient}
        removeIngredient={this.props.removeIngredient} 
        disabled={ingredientsCopy} 
        price={this.props.pri} 
        purchaseble={this.updatePurchase(this.props.ingr)}
        ordered={this.purchaseHandler} />
        </React.Fragment>
        );
        
        orderSummary = <OrderSummary 
        ingredients={this.props.ingr} 
        cancelPurchase={this.closeModal} 
        continuePurchase={this.continuePurchase} 
        price={this.props.pri} />;

        }

        if(this.state.loading){

            orderSummary = <Spinner />

        }
       
        return (
 
            <React.Fragment>

                <Modal show={this.state.purchasing} closeModal={this.closeModal} >
                    {orderSummary}
                </Modal>

                {burger}

            </React.Fragment>

        )
    }

}


const mapStateToProps = (state) =>{

    return {
        ingr : state.ingredients,
        pri : state.totalPrice
    }

}

const mapDispatchToProps = (dispatch) =>{
    return {
        addedIngredient : (ingName) => dispatch({type:actionTypes.ADD_INGREDIENT,ingredientName:ingName}),
        removeIngredient: (ingName) => dispatch({type:actionTypes.REMOVE_INGREDIENT,ingredientName:ingName})
    }
}
 


export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios));
