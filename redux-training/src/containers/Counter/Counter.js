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
                <hr />
            <button onClick={this.props.onClickResult}>Result Value</button>
            <ul>
                {this.props.result.map(results =>(
                    <li key={results.id} onClick={()=>(this.props.onClickDelete(results.id))}>{results.value}</li>
                ))}
                
            </ul>

            </div>
            
        );
    }
}


const mapStateToProps = state =>{
    return {
        ctr : state.counter,
        result: state.results
    }
}

const mapDispatchToProps = dispatch =>{
    return {

        onIncrementCounter: ( ) => dispatch({type:'INCREMENT'}),
        onDecrement: ()=>dispatch({type:'DECREMENT'}),
        onAdd: ()=>dispatch({type:'ADD',value:6}),
        onSub: ()=>dispatch({type:'SUB'}),
        onClickResult: ()=> dispatch({type:'RESULT'}),
        onClickDelete : (id) =>dispatch({type:'DEL',resultElId:id})

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);