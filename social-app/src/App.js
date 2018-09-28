import React from 'react';
import PropTypes from 'prop-types';


class ChildComponent extends React.Component{
  static propTypes = {
    name : PropTypes.string
  }

  static defaultProps = {
    name : 'stranger'
  }

  constructor(props){
    super(props);
    console.log('Child : State')
    this.state = {
      name : 'Bill'
    }

  }

  componentWillMount(){
    console.log('ChildComponent: Will Mount');
  }

  componentDidMount(){
    console.log('ChildComponent Did Mount');

  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('ChildShouldUpdate');
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState){
    console.log('Child: Will Update');
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);
  } 

  componentDidUpdate(prevProps,prevState){
    console.log('Child: Did Update');
    console.log('PrevProps', prevProps)
    console.log('PrevState', prevState)
  }

  render(){
    console.log('Child : Render');
    return(
      <div key="name">Name = {this.props.name}</div>
    )
  }

}



class ParentComponent extends React.Component{
  static propsTypes = {
    name : PropTypes.string
  }

  constructor(){
    super()
    this.state ={
      text : ""
    }
  }

  componentWillMount(){
    console.log('Parent : Will mount ');
  }

  componentDidMount(){
    console.log('Parent: Did Mount');
  }

  handelChange = (e)=>{
      this.setState({text: e.target.value});
  }

  render(){
    console.log('Parent: render');
    return(
      <div>
        <input type="text" value={this.state.value} onChange={this.handelChange}/>
        <ChildComponent />
      </div>
    )
  }
}


const App = <ParentComponent/>


export default App;