import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionCreators from '../../store/actions/index';

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
            <button onClick={()=>(this.props.onClickResult(this.props.ctr))}>Result Value</button>
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
        ctr : state.ctr.counter,
        result: state.result.results
    }
}

const mapDispatchToProps = dispatch =>{
    return {

        onIncrementCounter: ( ) => dispatch(actionCreators.increment()),
        onDecrement: ()=>dispatch(actionCreators.decrement()),
        onAdd: ()=>dispatch(actionCreators.add(6)),
        onSub: ()=>dispatch(actionCreators.sub()),
        onClickResult: (res)=> dispatch(actionCreators.result(res)),
        onClickDelete : (id) =>dispatch(actionCreators.del(id))

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);


