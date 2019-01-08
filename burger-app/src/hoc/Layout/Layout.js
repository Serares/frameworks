import React from 'react';
import Aux from '../AuxHoc/auxHoc';

import Toolbar from '../../components/navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/navigation/SideDrawer/SideDrawer';

import classes from './Layout.module.css';
// enclosing other components

class Layout extends React.Component {
    
    state = {
        showSideDrawer : false
    }


    sideDrawerToggle = () =>{
        

        this.setState((prevState)=>{
            return({showSideDrawer: !prevState.showSideDrawer})
        })
    }
    
render(){

    return(
        // face drawerToggle display block cand este sub 500px ecranul si display none la navItems 
    <Aux>
    
    <Toolbar showDrawer={this.sideDrawerToggle} />
    <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerToggle} />
    <main className={classes.Layout} >
        {this.props.children}
    </main>
    </Aux>

    )
}

}

export default Layout;