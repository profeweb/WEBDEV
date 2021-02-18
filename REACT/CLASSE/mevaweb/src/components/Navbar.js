import React, { Component } from 'react';
import Navitem from './Navitem';

class Navbar extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <nav>
                <ul>
                    <Navitem item="Home" tolink="/"  ></Navitem>
                    <Navitem item="About" tolink="/about"></Navitem>
                    <Navitem item="Portfolio" tolink="/portfolio"></Navitem>
                    <Navitem item="Contact" tolink="/contact"></Navitem>
                </ul>
            </nav>
        )
    }
}
    
export default Navbar;