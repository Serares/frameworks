import React from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

import classes from './ContactData.module.css';

class ContactData extends React.Component{

    state = {
        name:'',
        email: '',
        address: {
            zipcode:'',
            street:''
        },
        loading:false,
    }

    orderHandler = (e) =>{
        e.preventDefault();
        // loading at the start of the request;
        this.setState({loading:true});

        const orderObj = {
            ingredients : this.props.ingredients,
            customer: {
                name:'Nelu Soferu',
                address:'Str. Patimilor'
            },
            email: 'nelu-boss@yahoo.com',
            price: this.props.price,
            delivery:'fast'
        };

        axios.post('/orders.json',orderObj)
        .then(response=>{
            this.setState({loading:false});
            this.props.history.push('/')
            })
        .catch(error=>this.setState({loading:false}))
    }

    changeName = (e) =>{
        this.setState({
            name: e.target.value
        })
    }

    render() {

        let form = (<form>
        <input type="text" name="name" placeholder="Your Name" onChange={this.changeName} value={this.state.name} />
        <input type="email" name="email" placeholder="Your Email" />
        <input type="text" name="zipcode" placeholder="Zipcode" />
        <input type="text" name="street" placeholder="Your Street" />
        <Button btnType="Success" clicked={this.orderHandler}> Order </Button>
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