import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement}  />
                <CounterControl label="Add 6" clicked={this.props.onAdd}  />
                <CounterControl label="Subtract 2" clicked={this.props.onSub}  />
            </div>
        );
    }
}


const mapStateToProps = state =>{
    return {
        ctr : state.counter
    }
}

const mapDispatchToProps = dispatch =>{
    return {

        onIncrementCounter: ( ) => dispatch({type:'INCREMENT'}),
        onDecrement: ()=>dispatch({type:'DECREMENT'}),
        onAdd: ()=>dispatch({type:'ADD',value:10}),
        onSub: ()=>dispatch({type:'SUB'})

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);