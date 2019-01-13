import React from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';


import classes from './ContactData.module.css';

class ContactData extends React.Component{

    state = {

        orderForm:{

            name:{
                elementType: 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Name'
                },
                value:'',
                validation:{
                    required:true,
                },
                valid:false,
                touched:false
            },

            street:{
                elementType: 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Address'
                },
                value:'',
                validation:{
                    required:true,
                },
                valid:false,
                touched:false
            },

            zipCode:{
                elementType: 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'ZIP Code'
                },
                value:'',
                validation:{
                    required:true,
                    minLength: 5,
                    maxLength: 6
                },
                valid:false,
                touched:false
            },


            country:{
                elementType: 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Country'
                },
                value:'',
                validation:{
                    required:true,
                },
                valid:false,
                touched:false
            },

            email:{
                elementType: 'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Your E-Mail'
                },
                value:'',
                validation:{
                    required:true,
                },
                valid:false,
                touched:false
            },

            deliveryMethod:{
                elementType: 'select',
                elementConfig:{
                    option:[
                        {value:'fastes', displayValue:'Fastes'},
                        {value:'cheapes', displayValue:'Cheapest'},
                    ]
                },
                validation:{},
                value:'',
                touched:false,
                valid: true
            }

        },

        loading:false,
        formIsValid:false
    }

    orderHandler = (e) =>{
        e.preventDefault();

        const formData = {};
        for(let formElementIdent in this.state.orderForm){
            formData[formElementIdent] = this.state.orderForm[formElementIdent].value
        }

        // loading at the start of the request;
        this.setState({loading:true});

        const orderObj = {
            ingredients : this.props.ingredients,
            orderData : formData,
            price: this.props.price
        };

        axios.post('/orders.json',orderObj)
        .then(response=>{
            this.setState({loading:false});
            this.props.history.push('/')
            })
        .catch(error=>this.setState({loading:false}))
    }

    checkValidity = (value, rule) =>{

        let isValid = true;


        if(rule.required){
            isValid = value.trim() !== '' && isValid;
        }

        if(rule.minLength){
            isValid = value.length >= rule.minLength && isValid;
        }

        if(rule.maxLength){
            isValid = value.length <= rule.maxLength && isValid;
        }

        return isValid;

    }


    changedImput = (e, formElement) =>{
        // copiezi state 
        const updatedForm = {...this.state.orderForm};

        const updatedElementForm = {
            ...this.state.orderForm[formElement]
        }

        updatedElementForm.value = e.target.value;
        updatedElementForm.valid = this.checkValidity(updatedElementForm.value, updatedElementForm.validation);
        updatedElementForm.touched = true;
        updatedForm[formElement] = updatedElementForm;

        let formIsValid = true;

        for(let inputIdent in updatedForm){
            formIsValid = updatedForm[inputIdent].valid && formIsValid;
        }

        console.log(formIsValid);

        this.setState({
            orderForm: updatedForm,
            formIsValid : formIsValid
        })

    }


    render() {

        const formElement = [];
        for(let key in this.state.orderForm){
            formElement.push({
                id: key,
                config: this.state.orderForm[key],
            })
        }


        let form = (<form onSubmit={this.orderHandler}>
        
        {formElement.map(indName =>
            (
            <Input 
                key={indName.id}
                inputName={indName.id}
                elementType={indName.config.elementType}
                elementConfig={indName.config.elementConfig}
                value={indName.config.value}
                invalid={!indName.config.valid}
                shouldValidate={indName.config.validation}
                touched={indName.config.touched}
                changed={(event) =>{this.changedImput(event, indName.id)}}
            />
            )
        )}
        <Button disabled={!this.state.formIsValid} btnType="Success" clicked={this.orderHandler}> Order </Button>

                </form>);

            if(this.state.loading){
                form = <Spinner />
            }


        return(

            <div className={classes.ContactData} >
                {form}
            </div>

        )
    }

}


export default ContactData;