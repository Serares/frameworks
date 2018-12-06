import React,{ Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.3,
    bacon: 0.7,
    meat: 0.6,
    cheese: 0.2
}
// CONTAINER THAT HOLDS STATE

class BurgerBuilder extends Component {
    state = {

        ingredients : {
            salad : 0,
            bacon: 0,
            cheese : 0,
            meat: 0,
        },

        price: 0,
        purchaseble: false,
        purchasing: false

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

    continuePurchase = ()=>{
        alert('Purchased')
    }

    render() {

        // trimiti bool daca in ingredients sunt <= 0 ca sa fie disabled butoanele LESS
        const ingredientsCopy = {
            ...this.state.ingredients
        }

        for(let key in ingredientsCopy){
            ingredientsCopy[key] = ingredientsCopy[key] <= 0
        }

        return (
 
            <React.Fragment>

                <Modal show={this.state.purchasing} closeModal={this.closeModal} >
                    <OrderSummary 
                    ingredients={this.state.ingredients} 
                    cancelPurchase={this.closeModal} 
                    continuePurchase={this.continuePurchase} 
                    price={this.state.price} />
                </Modal>

                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                addIngredient={this.handleAdding}
                removeIngredient={this.handleRemoving} 
                disabled={ingredientsCopy} 
                price={this.state.price} 
                purchaseble={this.state.purchaseble}
                ordered={this.purchaseHandler} />

            </React.Fragment>

        )
    }

}





export default BurgerBuilder;
