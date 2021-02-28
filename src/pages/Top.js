import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Top extends Component {
    render () {
        return(
            <div className="pages">
                <div className="top">
                    <p className="logo"></p>
                    <ul className="menu">
                        <li><NavLink to="/Again/">Home</NavLink></li>
                        <li><NavLink to="/Again/portfolio">Portfolio</NavLink></li>
                        <li><NavLink to="/Again/profile">Profile</NavLink></li>
                        <li><NavLink to="/Again/board">Board</NavLink></li>
                        <li><NavLink to="/Again/Home2">Home2</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Top;