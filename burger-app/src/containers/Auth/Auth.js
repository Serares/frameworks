import React,{Component} from 'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

import classes from './Auth.module.css';

import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';

class Auth extends Component {

    state = {

        controls: {
            email:{
                elementType: 'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Your Email'
                },
                value:'',
                validation:{
                    required:true,
                    isEmail: true,
                    minLength:6
                },
                valid:false,
                touched:false
            },
            password:{
                elementType: 'input',
                elementConfig:{
                    type:'password',
                    placeholder:'Password'
                },
                value:'',
                validation:{
                    required:true,
                    minLength:6
                },
                valid:false,
                touched:false
            }
        },

        isSignup:false,

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

    inputChangedHandler = (event, controlName) =>{

        const updatedControls = {
            ...this.state.controls,
            [controlName] : {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid : this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        }

        this.setState({
            controls:updatedControls
        })

    }


    submitHandler = (event) =>{

        event.preventDefault();

        this.props.onAuth(this.state.controls.email.value,this.state.controls.password.value,this.state.isSignup)

    }

    switchAuthModeHandler = () =>{

        this.setState(prevState =>{
            return{
                isSignup: !prevState.isSignup
            }
        })

    }

    // componentDidUpdate(prevState,newState){
    //     console.log(newState);
    //     console.log(this.props.error);
    // }


    render(){

        const formElement = [];
        for(let key in this.state.controls){
            formElement.push({
                id: key,
                config: this.state.controls[key],
            })
        }

        let form = formElement.map(indName =>{
            return(
                <Input 
                key={indName.id}
                inputName={indName.id}
                elementType={indName.config.elementType}
                elementConfig={indName.config.elementConfig}
                value={indName.config.value}
                invalid={!indName.config.valid}
                shouldValidate={indName.config.validation}
                touched={indName.config.touched}
                changed={(event) =>{this.inputChangedHandler(event, indName.id)}}
                />
            )
        })

        if(this.props.loading){
            form = <Spinner />
        }

        let errorMessage = null;

        if(this.props.error){
            errorMessage = (
                <p style={{color:'red'}}>{this.props.error}</p>
            )
        }

        return(
            <div className={classes.Auth}>
                {errorMessage}
                <form onSubmit={this.submitHandler}>
                {form}
                <Button btnType="Success">Submit</Button>
                Currently {!this.state.isSignup? 'Signing in' : 'Registering new email'}
                </form>
                <Button 
                clicked={this.switchAuthModeHandler}
                btnType="Danger">Go to {this.state.isSignup ? 'Sign in' : 'Sign up'}</Button>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch =>{

    return{
        onAuth:(email,password, isSignup) => dispatch(actions.auth(email,password,isSignup))
    }

}

const mapStateToProps = state =>{
    return {
        price : state.burgerBuilder.totalPrice,
        loading : state.auth.loading,
        error : state.auth.error
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Auth)