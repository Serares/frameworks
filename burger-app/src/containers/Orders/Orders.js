import React, {Component} from 'react';
import axios from '../../axios-orders';

import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    
    state = {
        loading:true,
        orders:[]
    }
    
    componentDidMount(){
        
        axios.get('/orders.json')
        .then(res =>{

            let fetchedObj=[];
            for(let i in res.data){
                fetchedObj.push({
                    ...res.data[i],
                    id:i
                })
            }
            console.log(fetchedObj);
            this.setState({loading:false,orders:fetchedObj})
        })
        .catch(res=>{
            this.setState({loading:false})
        })
    }

    render(){

        return (
            <div>
            {this.state.orders.map(order=>{
                return <Order 
                key={order.id}
                price={+order.price}
                ingredients={order.ingredients}
                />
            })}
            </div>
        )
    }

}


export default withErrorHandler(Orders, axios);