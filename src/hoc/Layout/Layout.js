import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import './Layout.css';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render () {
        return (
            <Aux>
                <main className=".Content">
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;
