import React,{ Component } from 'react';
import axios from '../../axios-orders';


import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    salad: 0.3,
    bacon: 0.7,
    meat: 0.6,
    cheese: 0.2
}
// CONTAINER THAT HOLDS STATE

class BurgerBuilder extends Component {
    state = {

        ingredients : null,
        price: 0,
        purchaseble: false,
        purchasing: false,
        loading: false,
        error: false

    }


    

    updatePurchase(updatedIngredients){

        // aduni valorile ingredientelor :
        const sum = Object.keys(updatedIngredients).map(key =>{
            return updatedIngredients[key]
        }) .reduce((sum,el)=>{
            
            return sum + el
        },0)
        
        

        this.setState({ 
            
            purchaseble : sum > 0
        })

    }

    handleAdding = (type) =>{
        // aici doar incrementezi valorile ingredientelor.

        const oldIngredient = this.state.ingredients[type]; //este un int 
        const newIngredient = oldIngredient + 1;
        //console.log({...this.state.ingredients})
        // copie a obiectului
        const updatedIngredients = {
            ...this.state.ingredients
        }

        updatedIngredients[type] = newIngredient; // se incrementeaza doar valorile

        const oldPrice = this.state.price;
        const newPrice = oldPrice + INGREDIENT_PRICES[type]



        this.setState({
            ingredients : updatedIngredients,
            price: newPrice
        })

        // trebuie sa ii pasezi updatedIngredients ca sa tine evidenta in timp real la state; altefel nu se updateaza butonul cum trebuie si ramane in urma
        this.updatePurchase(updatedIngredients);

    }

    handleRemoving = (type) =>{
        // este la fel ca adding doar ca scade valorile
        
        const oldIngredient = this.state.ingredients[type];
        const newIngredient = oldIngredient - 1;
        //console.log({...this.state.ingredients})
        const updatedIngredients = {
            ...this.state.ingredients
        }

        updatedIngredients[type] = newIngredient;

        const oldPrice = this.state.price;
        const newPrice = oldPrice - INGREDIENT_PRICES[type]



        this.setState({
            ingredients : updatedIngredients,
            price: newPrice
        })

        this.updatePurchase(updatedIngredients);

    }


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
        // loading at the start of the request;
        this.setState({loading:true});

        const orderObj = {
            ingredients : this.state.ingredients,
            customer: {
                name:'Nelu Soferu',
                address:'Str. Patimilor'
            },
            email: 'nelu-boss@yahoo.com',
            price: this.state.price.toFixed(2),
            delivery:'fast'
        };

        axios.post('/orders.json',orderObj)
        .then(response=>this.setState({loading:false,purchasing:false}))
        .catch(error=>this.setState({loading:false,purchasing:false}))

    }


    componentDidMount() {
        axios.get('https://burger-app-project-3f63b.firebaseio.com/ingredients.json')

        .then(response=>(
            this.setState({
                ingredients: response.data
            })
        ))
        .catch(error=>this.setState({error:error}))
    }

    render() {

        // trimiti bool daca in ingredients sunt <= 0 ca sa fie disabled butoanele LESS
        const ingredientsCopy = {
            ...this.state.ingredients
        }

        for(let key in ingredientsCopy){
            ingredientsCopy[key] = ingredientsCopy[key] <= 0
        }

        // pui spinner in modal in caz ca se face fetch la date 
        let orderSummary = null;


        let burger = this.state.error ? <p>Ingredients can't load</p> : <Spinner />;

        if(this.state.ingredients){

        burger = (
        <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
        addIngredient={this.handleAdding}
        removeIngredient={this.handleRemoving} 
        disabled={ingredientsCopy} 
        price={this.state.price} 
        purchaseble={this.state.purchaseble}
        ordered={this.purchaseHandler} />
        </React.Fragment>
        );
        
        orderSummary = <OrderSummary 
        ingredients={this.state.ingredients} 
        cancelPurchase={this.closeModal} 
        continuePurchase={this.continuePurchase} 
        price={this.state.price} />;

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





export default withErrorHandler(BurgerBuilder,axios);
