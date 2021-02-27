import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Top extends Component {
    render () {
        return(
            <div className="top">
                <p className="logo"></p>
                <ul className="menu">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/board">Board</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Top;